'use server'

import { titleMovieMock } from '@/app/mocks/title-mocks'

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = await params
    const key = process.env.KEY
    const backend = process.env.BACKEND_URL
    const url = `${backend}/title`
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ i: id }),
    }).then((r) => r.json())
    return Response.json(res)
  } catch (e) {
    return Response.json(e)
  }
}
