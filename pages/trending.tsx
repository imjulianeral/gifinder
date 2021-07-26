import type { GetServerSideProps } from 'next'

import Image from 'next/image'

import { Layout } from '@components/ui'
import { TrendingResponse } from '@typeDefs/Giphy'

export const getServerSideProps: GetServerSideProps = async () => {
  const uri = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_KEY}`
  const req = await fetch(uri)
  const res: TrendingResponse = await req.json()

  return {
    props: {
      ...res,
    },
  }
}

export default function Trending({ data }: TrendingResponse) {
  console.log(data)

  return (
    <Layout pageName="Trending" description="Most searched gifs">
      <h1>Trending</h1>

      {data.map(gif => (
        <Image
          key={gif.id}
          loader={() => gif.images.fixed_width_small.url}
          src={gif.images.fixed_width_small.url}
          alt={gif.title}
          width={gif.images.fixed_width_small.width}
          height={gif.images.fixed_width_small.height}
        />
      ))}
    </Layout>
  )
}
