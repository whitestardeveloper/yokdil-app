import { neon } from '@neondatabase/serverless'

// Bulut senkron API'si. Şifre YALNIZCA sunucu ortam değişkeninde (DATABASE_URL);
// istemci koduna asla girmez. Vercel: Settings → Environment Variables → DATABASE_URL.
const sql = neon(process.env.DATABASE_URL)

export default async function handler(req, res) {
  try {
    const key = String((req.query && req.query.key) || '').trim()
    if (key.length < 6) {
      res.status(400).json({ error: 'key gerekli (en az 6 karakter)' })
      return
    }

    await sql`CREATE TABLE IF NOT EXISTS app_state (
      user_key text PRIMARY KEY,
      data jsonb NOT NULL,
      updated_at timestamptz NOT NULL DEFAULT now()
    )`

    if (req.method === 'GET') {
      const rows = await sql`SELECT data FROM app_state WHERE user_key = ${key}`
      res.status(200).json(rows[0] ? rows[0].data : null)
      return
    }

    if (req.method === 'PUT' || req.method === 'POST') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
      const json = JSON.stringify(body ?? {})
      await sql`INSERT INTO app_state (user_key, data, updated_at)
                VALUES (${key}, ${json}::jsonb, now())
                ON CONFLICT (user_key)
                DO UPDATE SET data = ${json}::jsonb, updated_at = now()`
      res.status(200).json({ ok: true })
      return
    }

    res.status(405).json({ error: 'method not allowed' })
  } catch (err) {
    res.status(500).json({ error: String(err && err.message ? err.message : err) })
  }
}
