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
  const category = params.category as string
  const id = params.id as string
  const [data, setData] = useState<TitleType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  useEffect(() => {
    if (!id || !category) return

    const fetchMovie = async () => {
      try {
        const res = await fetch(`/api/movies/${category}/${id}`)
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
  }, [category, id])

  if (!data) return <LoadingScreen />
  if (loading) return <LoadingScreen />
  if (error)
    return (
      <div className="flex flex-col justify-center items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">
          Conteudo não encontrado para id: {id} e categoria: {category}
        </h1>
        <Button onClick={() => router.back()}>Voltar</Button>
      </div>
    )
  else
    return (
      <div
        className="h-full bg-cover bg-center pt-56 pb-36 space-y-6 px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,0.9)), url(${data?.Poster})`,
        }}
      >
        <div className="flex flex-wrap gap-x-2 gap-y-2">
          {data?.Ratings.map((rating) => (
            <Badge>
              {rating.Value} por {rating.Source}
            </Badge>
          ))}
        </div>
        <div>
          <h1 className="text-5xl">{data?.Title}</h1>
        </div>
        <div>
          <p>{data?.Plot}</p>
        </div>
        <Link href={`https://www.imdb.com/title/${data?.imdbID}`}>
          <Button>Ir para Página IMDb</Button>
        </Link>{' '}
      </div>
    )
}
