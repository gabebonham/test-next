'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function PendentPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen px-6 w-full flex flex-col text-center gap-y-4 justify-center items-center">
      <h1 className="text-4xl">
        Pagina com implementação pendente devido a escaces da api do OMDb.
      </h1>
      <p>Provavelmente o botão que tu clicou era apenas para fins estéticos.</p>
      <Button onClick={() => router.back()}>Voltar</Button>
    </div>
  )
}
