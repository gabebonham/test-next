'use client'
import { useParams } from 'next/navigation'

export default function MoviesCategoriesPage() {
  const params = useParams()
  const category = params.category as string
  if (!category)
    return <div className="h-full">not found for id and category</div>
  else
    return (
      <div className="h-full">
        carousel igual home pra cada categoria com search bar
      </div>
    )
}
