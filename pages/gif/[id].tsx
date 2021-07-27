import type { GetServerSideProps, GetServerSidePropsContext } from 'next'

import Image from 'next/image'
import { useCallback } from 'react'

import { Layout } from '@components/ui'
import { DetailsResponse } from '@typeDefs/Giphy'

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const uri = `https://api.giphy.com/v1/gifs/${query.id}?api_key=${process.env.GIPHY_KEY}`
  const req = await fetch(uri)
  const res: DetailsResponse = await req.json()

  console.log(res)

  return {
    props: {
      ...res,
    },
  }
}

export default function Details({ data }: DetailsResponse) {
  return (
    <Layout pageName={data.slug} description={`${data.slug}' Detail Page`}>
      <div className="grid">
        <article>
          <h1>{data.title}</h1>
          <video muted autoPlay loop src={data.images.original_mp4.mp4} />
        </article>
        <aside className="sidebar">
          <h3>{data.username}</h3>
        </aside>
      </div>
    </Layout>
  )
}
