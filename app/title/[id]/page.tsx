'use client'
import LoadingScreen from '@/app/_components/LoadingScreen'
import { TitleType } from '@/app/_types/title-type'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MoviePage() {
  const params = useParams()
  const id = params.id as string
  const [data, setData] = useState<TitleType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  useEffect(() => {
    if (!id) return

    const fetchMovie = async () => {
      try {
        const res = await fetch(`/api/${id}`)
        if (!res.ok) throw new Error('Failed to fetch')
        const json = await res.json()
        setData(json)
      } catch (err) {
        setError('Error fetching data')
      } finally {
        setLoading(false)
      }
    }

    fetchMovie()
  }, [id])

  if (!data) return <LoadingScreen />
  if (loading) return <LoadingScreen />
  if (error)
    return (
      <div className="flex flex-col  items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">
          Conteudo não encontrado para id: {id}
        </h1>
        <Button onClick={() => router.back()}>Voltar</Button>
      </div>
    )
  else
    return (
      <div
        className="sm:px-8 min-h-screen bg-cover bg-center pt-56 pb-36  px-4 lg:bg-cover w-full md:text-xl xl:text-3xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,1)), url(${data?.Poster})`,
        }}
      >
        <div className="space-y-6 lg:flex lg:flex-col lg:px-32">
          <div className="flex flex-wrap gap-x-2 gap-y-2">
            {data?.Ratings?.map((rating) => (
              <Badge className="lg:text-lg">
                {rating.Value} por {rating.Source}
              </Badge>
            ))}
          </div>
          <div>
            <h1 className="text-5xl">{data?.Title}</h1>
          </div>
          <div className="md:max-w-4/6">
            <p>{data?.Plot}</p>
          </div>
          <Link
            href={`https://www.imdb.com/title/${data?.imdbID}`}
            className="w-fit "
          >
            <Button className="cursor-pointer">Ir para Página IMDb</Button>
          </Link>{' '}
        </div>
      </div>
    )
}
