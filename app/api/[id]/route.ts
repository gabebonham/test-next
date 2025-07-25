'use server'

import { titleMovieMock } from '@/app/mocks/title-mocks'

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params
    const key = process.env.KEY
    const backend = process.env.BACKEND_URL
    const url = `${backend}/title`
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ i: id }),
    }).then((r) => r.json())
    return Response.json(res)
  } catch (e) {
    return Response.json(e)
  }
}
