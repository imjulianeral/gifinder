import type { GetServerSideProps } from 'next'

import { GifList, Layout } from '@components/ui'
import { GifListResponse } from '@typeDefs/Giphy'

export const getServerSideProps: GetServerSideProps<GifListResponse> = async () => {
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
  return (
    <Layout pageName="Trending" description="Most searched gifs">
      <h1>Trending</h1>

      {data.map(gif => (
        <GifList key={gif.id} gif={gif} />
      ))}
    </Layout>
  )
}
