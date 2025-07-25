'use client'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Film, FilmIcon, Menu, MoveIcon, Search } from 'lucide-react'
import Link from 'next/link'
import SearchModal from './SearchModal'

export default function NavBarDrawer() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Menu className="text-primary size-8" />
      </DrawerTrigger>
      <DrawerContent className="z-60 bg-shade2">
        <div className="flex flex-col justify-start px-4 gap-y-10 py-8 ">
          <Link href="/mock" className="text-3xl flex items-center gap-x-4">
            <Film />
            <p>Filmes</p>
          </Link>
          <Link href="/mock" className="text-3xl flex items-center gap-x-4">
            <Film />
            <p>Séries</p>
          </Link>
          <SearchModal />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
