import type { GetServerSideProps } from 'next'

import Image from 'next/image'
import Link from 'next/link'

import { Layout } from '@components/ui'
import { GifListResponse } from '@typeDefs/Giphy'
import { useCallback } from 'react'

export const getServerSideProps: GetServerSideProps = async () => {
  const uri = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_KEY}`
  const req = await fetch(uri)
  const res: GifListResponse = await req.json()

  return {
    props: {
      ...res,
    },
  }
}

export default function Trending({ data }: GifListResponse) {
  const loadGif = useCallback((url: string) => url, [])

  return (
    <Layout pageName="Trending" description="Most searched gifs">
      <h1>Trending</h1>

      {data.map(gif => (
        <Link key={gif.id} href={`/gif/${gif.id}`}>
          <a>
            <Image
              loader={() => loadGif(gif.images.fixed_width_small.url)}
              src={gif.images.fixed_width_small.url}
              alt={gif.title}
              width={gif.images.fixed_width_small.width}
              height={gif.images.fixed_width_small.height}
            />
          </a>
        </Link>
      ))}
    </Layout>
  )
}
