import Image from 'next/image'
import Link from 'next/link'

import { Gif } from '@typeDefs/Giphy'
import { useLoader } from '@hooks'

export type GifListProps = {
  data: Gif[]
}

/**
 * Component which renders the grid containing all the gif images
 * @param GifListProps The Gif image properties {@link GifListProps}
 * @returns A list of gif images
 */

export function GifList({ data }: GifListProps) {
  const { loadGif } = useLoader()

  return (
    <section className="gallery">
      {data.map(gif => (
        <Link key={gif.id} href={`/gif/${gif.id}`}>
          <a aria-label={gif.title} className="gallery__img">
            <Image
              loader={() => loadGif(gif.images.fixed_width.url)}
              src={gif.images.fixed_width.url}
              alt={gif.title}
              width={gif.images.fixed_width.width}
              height={gif.images.fixed_width.height}
            />
          </a>
        </Link>
      ))}
    </section>
  )
}
