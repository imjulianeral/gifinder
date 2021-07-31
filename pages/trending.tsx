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

/**
 * The Trending page
 * @param GifListResponse The response with all the gif images {@link GifListResponse}
 * @returns A page which shows the list of the most popular gif images at the moment
 */

export default function Trending({ data }: GifListResponse) {
  return (
    <Layout pageName="Trending" description="Most searched gifs">
      <h1>Trending</h1>

      <GifList data={data} />
    </Layout>
  )
}
