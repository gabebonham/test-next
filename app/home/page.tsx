import { api } from '@/lib/api'
import { CarouselComponent } from '../_components/CarouselComponent'
import { searchMock } from '../mocks/search-mocks'
import { SearchItemType } from '../_types/search-type'

export default async function HomePage() {
  // const shows = await api('/omdb/search', { type: 'series', page: '1' }, 'post')
  // const movies = await api('/omdb/search', { type: 'movie', page: '1' }, 'post')
  const shows = searchMock.Search.filter(
    (s) => s.Type.toLocaleLowerCase() == 'series',
  )
  const movies = searchMock.Search.filter(
    (s) => s.Type.toLocaleLowerCase() == 'movie',
  )
  return (
    <div className="lg:w-full sm:w-3/4 md:w-5/6  w-full">
      <section className="h-full w-full px-4  pb-8 flex flex-col gap-y-16 lg:px-10">
        <div className="py-8">
          <h1 className="text-3xl">
            Bem vindo(a)! Ao melhor repositório cinéfilo!
          </h1>
        </div>
        <div>
          <h1 className="text-2xl py-4">Filmes</h1>
          <CarouselComponent
            search={{ Search: movies } as { Search: SearchItemType[] }}
          />
        </div>
        <div>
          <h1 className="text-2xl py-4">Series</h1>
          <CarouselComponent
            search={{ Search: shows } as { Search: SearchItemType[] }}
          />
        </div>
      </section>
    </div>
  )
}
