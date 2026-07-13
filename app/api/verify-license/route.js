// app/api/verify-license/route.js
//
// Thin proxy between the Chrome extension and Dodo Payments' license
// validation endpoint. Dodo's /licenses/validate endpoint is public (no
// secret key required), so this route mainly exists to:
//   1. give the extension one stable URL regardless of which payment
//      platform is behind it
//   2. restrict which origin is allowed to call it (only the extension)
//   3. leave a place to add rate-limiting later if needed
//
// Env vars (set in .env.local, see .env.local.example):
//   DODO_ENV                 "test" or "live" (default: "test")
//   ALLOWED_EXTENSION_ORIGIN  e.g. "chrome-extension://abcdefghijklmnop"

const DODO_BASE =
  process.env.DODO_ENV === "live"
    ? "https://live.dodopayments.com"
    : "https://test.dodopayments.com";

function corsHeaders(origin) {
  const allowed = process.env.ALLOWED_EXTENSION_ORIGIN;
  const allowOrigin = allowed && origin === allowed ? origin : allowed || "";
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function OPTIONS(request) {
  const origin = request.headers.get("origin") || "";
  return new Response(null, { status: 204, headers: corsHeaders(origin) });
}

export async function POST(request) {
  const origin = request.headers.get("origin") || "";
  const headers = { "Content-Type": "application/json", ...corsHeaders(origin) };

  let licenseKey;
  try {
    const body = await request.json();
    licenseKey = body.licenseKey;
  } catch {
    return Response.json({ valid: false, error: "invalid JSON body" }, { status: 400, headers });
  }

  if (!licenseKey || typeof licenseKey !== "string") {
    return Response.json({ valid: false, error: "missing licenseKey" }, { status: 400, headers });
  }

  try {
    const dodoRes = await fetch(`${DODO_BASE}/licenses/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ license_key: licenseKey }),
    });

    if (!dodoRes.ok) {
      return Response.json({ valid: false, error: "license not found" }, { status: 200, headers });
    }

    const data = await dodoRes.json();
    return Response.json({ valid: Boolean(data.valid) }, { status: 200, headers });
  } catch (e) {
    return Response.json(
      { valid: false, error: "verification service unreachable" },
      { status: 502, headers }
    );
  }
}
