'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SearchModal() {
  const [input, setInput] = useState<string | undefined>()
  const router = useRouter()
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" flex items-center gap-x-4">
          <Search />
          <p className="text-3xl">Pesquisar</p>
        </div>
      </DialogTrigger>
      <DialogContent className="z-80">
        <DialogHeader className="space-y-4">
          <DialogTitle>
            <p className="text-shade2">Faça sua Pesquisa!</p>
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-y-4">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border-shade2"
            />
            <Button onClick={() => router.push(`/search?value=${input}`)}>
              Pesquisar
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
