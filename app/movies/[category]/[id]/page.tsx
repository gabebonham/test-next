'use client'
import { TitleType } from '@/app/_types/title-type'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MoviePage() {
  const params = useParams()
  const category = params.category as string
  const id = params.id as string
  const [data, setData] = useState<TitleType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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

  if (!data) return <div className="h-full">Not found</div>
  if (loading) return <div className="h-full">Loading...</div>
  if (error) return <div className="h-full">{error}</div>
  if (!id || !category)
    return <div className="h-full">not found for id and category</div>
  else
    return (
      <div
        className="h-full"
        style={{ backgroundImage: `url(${data?.Poster})` }}
      >
        <div className="flex">
          {data?.Ratings.map((rating) => (
            <Badge>
              {rating.Value} por {rating.Source}
            </Badge>
          ))}
        </div>
        <div>
          <h1>{data?.Title}</h1>
        </div>
        <div>
          <p>{data?.Plot}</p>
        </div>
        <Button>Ir para Página IMDb</Button>
      </div>
    )
}
