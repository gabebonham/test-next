'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Search } from 'lucide-react'

export default function SearchModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" flex items-center gap-x-4">
          <Search />
          <p className="text-3xl">Pesquisar</p>
        </div>
      </DialogTrigger>
      <DialogContent className="z-80">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
