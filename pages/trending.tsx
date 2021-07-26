import { GetServerSideProps } from 'next'

import { Layout } from '@components/ui'

type TrendingProps = {
  gifList: object[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  const uri = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_KEY}`
  const req = await fetch(uri)
  const gifList = await req.json()

  return {
    props: {
      gifList,
    },
  }
}

export default function Trending({ gifList }: TrendingProps) {
  console.log(gifList)

  return (
    <Layout pageName="Trending" description="Most searched gifs">
      <h1>Trending</h1>
    </Layout>
  )
}
