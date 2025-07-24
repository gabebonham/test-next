'use server'
export async function api(url: string, payload: any, method: string) {
  const backend = process.env.BACKEND_URL
  const finalUrl = url.startsWith('/') ? url : `/${url}`
  const res = await fetch(backend + finalUrl, {
    method: method.toLocaleUpperCase(),
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  return res.json()
}
