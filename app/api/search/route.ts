'use server'

export async function POST(req: Request) {
  try {
    const { input, page, type, isId } = await req.json()
    const s = input
    const key = process.env.KEY as string
    const url = `http://www.omdbapi.com/?apikey=${key}${
      type ? '&type=' + type : ''
    }${s ? '&s=' + s : isId ? '&i=' + input : ''}${
      page ? '&page=' + page.toString() : ''
    }`
    console.log(url)
    const res = await fetch(url).then((r) => r.json())
    return Response.json(res)
  } catch (e) {
    return Response.json(e)
  }
}
