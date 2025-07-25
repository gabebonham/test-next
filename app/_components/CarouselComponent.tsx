'use client'
import * as React from 'react'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { SearchItemType } from '../_types/search-type'
import { TitleType } from '../_types/title-type'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
interface Props {
  Search: SearchItemType[]
}
export function CarouselComponent({ search }: { search: Props }) {
  return (
    <Carousel className="w-full ">
      <CarouselContent>
        {search.Search.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Link href={`/title/${item.imdbID}`}>
              <div className="px-4 py-14">
                <Card className="bg-shade2 border-shade1 text-shade5 hover:shadow-2xl/50 hover:border-shade3 transition-all delay-50">
                  <CardContent className="h-96 overflow-hidden">
                    <Image
                      src={item.Poster}
                      alt={item.Title}
                      width={800}
                      height={800}
                      className="w-full"
                    />
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <p>{item.Title}</p>
                    <Badge>{item.Year}</Badge>
                  </CardFooter>
                </Card>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="hidden" />
      <CarouselNext className="hidden" />
    </Carousel>
  )
}
