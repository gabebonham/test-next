'use client'
import { CarouselComponent } from '@/app/_components/CarouselComponent'
import { SearchItemType } from '@/app/_types/search-type'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { api } from '@/lib/api'
import { Divide } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MoviesSearchPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const value = searchParams.get('value')
  const [page, setPage] = useState<number>(1)
  const [data, setData] = useState<SearchItemType[]>([])
  const [input, setInput] = useState('')
  const [isId, setIsId] = useState<boolean>(false)
  const [type, setType] = useState<string | undefined>()
  const handlerAction = async () => {
    const resData = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify({ input, page, type, isId }),
    }).then((r) => r.json())
    if (page === 1) {
      setData(resData.Search || [])
    } else {
      setData((prev) => [...prev, ...(resData.Search || [])])
    }
  }
  useEffect(() => {
    if (value) {
      setInput(value as string)
      router.replace(pathname)
    }
  }, [])
  return (
    <div className="min-h-screen lg:w-full sm:w-3/4 md:w-5/6 w-full lg:text-3xl lg:px-32">
      <div className="px-4 flex flex-col items-center py-4 gap-x-2 justify-center lg:flex-row lg:gap-x-4 xl:w-4/6 xl:justify-start">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          name="inp"
          className="lg:text-2xl lg:h-fit"
        />
        <div className=" py-4 flex items-center gap-x-2 justify-center w-full lg:gap-x-8">
          <Popover>
            <PopoverTrigger asChild>
              <Button className="w-1/4 lg:text-2xl lg:h-fit cursor-pointer">
                Filtros
              </Button>
            </PopoverTrigger>
            <PopoverContent className="space-y-6 ml-4">
              <div>
                <h1 className="pb-4">Tipo:</h1>
                <div className="grid grid-cols-2 gap-y-4">
                  <div className="flex items-center gap-x-4">
                    <Checkbox
                      checked={type == 'movie'}
                      onCheckedChange={(checked) => {
                        if (checked === true) {
                          setType('movie')
                        } else {
                          setType(undefined)
                        }
                      }}
                    />
                    <p>Filme</p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <Checkbox
                      checked={type == 'series'}
                      onCheckedChange={(checked) => {
                        if (checked === true) {
                          setType('series')
                        } else {
                          setType(undefined)
                        }
                      }}
                    />
                    <p>Series</p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <Checkbox
                      checked={type == 'episode'}
                      onCheckedChange={(checked) => {
                        if (checked === true) {
                          setType('episode')
                        } else {
                          setType(undefined)
                        }
                      }}
                    />
                    <p>Episódio</p>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="pb-4">Etc:</h1>
                <div className="grid grid-cols-2 gap-y-8">
                  <div className="flex items-center gap-x-4">
                    <Checkbox
                      checked={isId}
                      onCheckedChange={(checked) => {
                        setIsId(!isId)
                      }}
                    />
                    <p>ID do IMDB</p>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Button
            className="w-3/4 lg:w-3/6 lg:text-2xl lg:h-fit cursor-pointer"
            onClick={() => {
              setPage(1)
              setData([])
              handlerAction()
            }}
          >
            Pesquisar
          </Button>
        </div>
      </div>
      {data && data.length > 0 ? (
        <div>
          <div className="grid grid-cols-2 w-full gap-4 px-2 lg:grid-cols-3 md:gap-10">
            {data.map((s) => (
              <Link href={`/title/${s.imdbID}`}>
                <Card className="bg-shade2 border-shade1 text-shade5 hover:shadow-2xl/50 hover:border-shade3 transition-all delay-50">
                  <CardContent className=" overflow-hidden h-32 lg:h-64">
                    <Image
                      src={s.Poster}
                      alt={s.Title}
                      width={800}
                      height={800}
                      className="w-full"
                    />
                  </CardContent>
                  <CardFooter className="flex flex-col gap-y-2 justify-between">
                    <p className="text-xs lg:text-lg xl:text-2xl">{s.Title}</p>
                    <Badge>{s.Year}</Badge>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
          <div className="w-full flex justify-center py-6">
            {page > 0 && (
              <Button
                onClick={() => {
                  setPage((prev) => prev + 1)
                  handlerAction()
                }}
                className="cursor-pointer lg:text-2xl lg:h-fit"
              >
                Carregar Mais
              </Button>
            )}{' '}
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center">Pesquise algo a cima!</div>
      )}
    </div>
  )
}
