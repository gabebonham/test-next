'use client'

import { Separator } from '@/components/ui/separator'
import { Film } from 'lucide-react'

export default function FooterComponent() {
  return (
    <footer className="w-full flex flex-col bg-shade1 px-4 gap-y-4 py-4 lg:py-10 lg:gap-y-8 lg:px-32">
      <div className="w-full lg:w-3/5">
        <div className="flex items-center gap-x-2">
          <Film className="text-shade1 bg-primary size-9 p-1 rounded-lg" />
          <p className="text-lg text-primary">CinemaRepo</p>
        </div>
      </div>
      <Separator className=" bg-shade3" />
      <div className="w-full flex justify-center text-sm">
        <p className="text-shade4">2024 CinemaRepo All rights reserved.</p>
      </div>
    </footer>
  )
}
