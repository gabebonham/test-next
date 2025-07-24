'use client'

import { Separator } from '@/components/ui/separator'
import { Film } from 'lucide-react'

export default function FooterComponent() {
  return (
    <footer className="w-full flex flex-col bg-shade1 px-4 gap-y-4 py-4">
      <div className="w-full">
        <div className="flex items-center gap-x-2">
          <Film className="text-shade1 bg-primary size-9 p-1 rounded-lg" />
          <p className="text-lg text-primary">CinemaRepo</p>
        </div>
      </div>
      <Separator />
      <div className="w-full flex justify-center text-sm">
        <p>2024 CinemaRepo All rights reserved.</p>
      </div>
    </footer>
  )
}
