'use server'

import { titleMovieMock } from '@/app/mocks/title-mocks'

export async function GET(
  req: Request,
  { params }: { params: { category: string; id: string } },
) {
  try {
    const { category, id } = await params
    return Response.json(titleMovieMock)
  } catch (e) {
    return Response.json(e)
  }
}
