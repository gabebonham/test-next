'use client'
import { Film, Menu } from 'lucide-react'
import Link from 'next/link'
import NavBarDrawer from './NavBarDrawer'

export default function HeaderComponent() {
  return (
    <header className="w-full h-fit fixed bg-shade1/80 z-50 backdrop-blur-2xl">
      <div className="w-full flex items-center justify-between px-4 py-4">
        <Link href={'/home'}>
          <div className="text-primary gap-x-2 font-bold flex items-center">
            <Film className="bg-primary text-shade1 size-12 rounded-lg p-1" />
            <p className="text-xl">CinemaRepo</p>
          </div>
        </Link>
        <div className="hidden">search</div>
        <div className="sm:flex items-center hidden">
          <Link href={'/'}>Filmes</Link>
          <Link href={'/'}>Séries</Link>
          <Link href={'/'}>Gêneros</Link>
          <Link href={'/'}>Top</Link>
        </div>
        <div className="text-primary">
          <NavBarDrawer />
        </div>
      </div>
    </header>
  )
}
