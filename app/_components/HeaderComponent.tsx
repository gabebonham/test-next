'use client'
import { Film, Menu } from 'lucide-react'
import Link from 'next/link'
import NavBarDrawer from './NavBarDrawer'
import { Button } from '@/components/ui/button'

export default function HeaderComponent() {
  return (
    <header className="w-full h-fit fixed bg-shade1/80 z-50 backdrop-blur-2xl lg:px-8 ">
      <div className="w-full flex items-center justify-between px-4 py-4">
        <Link href={'/home'}>
          <div className="text-primary gap-x-2 font-bold flex items-center">
            <Film className="bg-primary text-shade1 size-12 rounded-lg p-1" />
            <p className="text-xl">CinemaRepo</p>
          </div>
        </Link>
        <div className="hidden md:block">
          <Link href={'/search'} className="w-fit">
            <Button className="lg:text-xl rounded-lg py-6 px-6 cursor-pointer">
              Pesquisar
            </Button>
          </Link>
        </div>
        <div className="sm:flex sm:px-12 sm:gap-x-6 items-center hidden lg:text-xl">
          <Link href={'/mock'}>Filmes</Link>
          <Link href={'/mock'}>Séries</Link>
          <Link href={'/mock'}>Gêneros</Link>
          <Link href={'/mock'}>Top</Link>
        </div>
        <div className="sm:hidden text-primary">
          <NavBarDrawer />
        </div>
      </div>
    </header>
  )
}
