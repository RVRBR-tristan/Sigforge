const { put } = require('@vercel/blob');
const { randomUUID } = require('crypto');

const MAX_BYTES = 4 * 1024 * 1024;
const TYPES = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp' };

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Image-Type');
}

module.exports = async (req, res) => {
  setCors(res);
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Méthode non autorisée' });

  const type = String(req.headers['x-image-type'] || req.headers['content-type'] || '').split(';')[0].trim();
  const ext = TYPES[type];
  if (!ext) return res.status(415).json({ error: 'Format non supporté (JPEG, PNG ou WebP)' });

  let body = req.body;
  if (!Buffer.isBuffer(body)) {
    const chunks = [];
    let total = 0;
    for await (const chunk of req) {
      total += chunk.length;
      if (total > MAX_BYTES) return res.status(413).json({ error: 'Image trop lourde (max 4 Mo)' });
      chunks.push(chunk);
    }
    body = Buffer.concat(chunks);
  }
  if (!body || body.length === 0) return res.status(400).json({ error: 'Aucune image reçue' });
  if (body.length > MAX_BYTES) return res.status(413).json({ error: 'Image trop lourde (max 4 Mo)' });

  try {
    const blob = await put(`photos/${randomUUID()}.${ext}`, body, {
      access: 'public',
      contentType: type,
      cacheControlMaxAge: 31536000,
    });
    return res.status(200).json({ url: blob.url });
  } catch (err) {
    console.error('Blob upload failed:', err);
    return res.status(500).json({ error: "Échec de l'hébergement de la photo" });
  }
};
