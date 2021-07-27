import Image from 'next/image'
import Link from 'next/link'

import { Gif } from '@typeDefs/Giphy'
import { useLoader } from '@hooks'

type GifListProps = {
  gif: Gif
}

export function GifList({ gif }: GifListProps) {
  const { loadGif } = useLoader()

  return (
    <Link key={gif.id} href={`/gif/${gif.id}`}>
      <a>
        <Image
          loader={() =>
            loadGif(gif.images.fixed_width_small.url ?? gif.images.fixed_width.url)
          }
          src={gif.images.fixed_width_small.url ?? gif.images.fixed_width.url}
          alt={gif.title}
          width={gif.images.fixed_width_small.width ?? gif.images.fixed_width.width}
          height={gif.images.fixed_width_small.height ?? gif.images.fixed_width.height}
        />
      </a>
    </Link>
  )
}
