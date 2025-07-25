'use server'

export async function POST(req: Request) {
  try {
    const { input, page, type, isId } = await req.json()
    const s = input
    const key = process.env.KEY as string
    const backend = process.env.BACKEND_URL as string
    // const url = `http://www.omdbapi.com/?apikey=${key}${
    //   type ? '&type=' + type : ''
    // }${s ? '&s=' + s : isId ? '&i=' + input : ''}${
    //   page ? '&page=' + page.toString() : ''
    // }`
    const url = `${backend}/search`

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ s, i: isId, type, page }),
    }).then((r) => r.json())
    return Response.json(res)
  } catch (e) {
    return Response.json(e)
  }
}
