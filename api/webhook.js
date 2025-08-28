export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // ⚠️ Put your real webhook here (keep private if repo is public!)
  const REAL_WEBHOOK_URL =
    "https://discord.com/api/webhooks/1409112668975140917/cVJeYGDTM_3CLQePPAemqkQ0g32VWZhRmWxNVentg9hzxnrDNm0tu9SaU5GYAd4Iakn2";

  try {
    const discordRes = await fetch(REAL_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const data = await discordRes.text();
    res.status(discordRes.status).send(data);
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ error: "Failed to forward webhook" });
  }
}
