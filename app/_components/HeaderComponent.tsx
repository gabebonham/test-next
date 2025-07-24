'use client'
import Link from 'next/link'

export default function HeaderComponent() {
  return (
    <header className="w-full h-fit fixed">
      <div className="w-full flex items-center justify-between">
        <div>CinemaRepo</div>
        <div className="">search</div>
        <div className="flex items-center">
          <Link href={'/'}>Filmes</Link>
          <Link href={'/'}>Séries</Link>
          <Link href={'/'}>Gêneros</Link>
          <Link href={'/'}>Top</Link>
        </div>
      </div>
    </header>
  )
}
