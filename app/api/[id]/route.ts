'use server'

import { titleMovieMock } from '@/app/mocks/title-mocks'

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = await params
    const key = process.env.KEY
    const url = `http://www.omdbapi.com/?apikey=${key}&i=${id}`
    const res = await fetch(url).then((r) => r.json())
    return Response.json(res)
  } catch (e) {
    return Response.json(e)
  }
}
