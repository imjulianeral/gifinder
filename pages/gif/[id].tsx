import type { GetServerSideProps, GetServerSidePropsContext } from 'next'

import Image from 'next/image'
import { useCallback } from 'react'
import { Share2 } from 'react-feather'

import { Layout } from '@components/ui'
import { DetailsResponse } from '@typeDefs/Giphy'

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const uri = `https://api.giphy.com/v1/gifs/${query.id}?api_key=${process.env.GIPHY_KEY}`
  const req = await fetch(uri)
  const res: DetailsResponse = await req.json()

  return {
    props: {
      ...res,
    },
  }
}

export default function Details({ data }: DetailsResponse) {
  const loadGif = useCallback((url: string) => url, [])
  const avatarFallback = 'https://media.giphy.com/media/j6aoUHK5YiJEc/giphy.gif'

  return (
    <Layout pageName={data.slug} description={`${data.slug}' Detail Page`}>
      <div className="grid">
        <article className="article">
          <h1>{data.title}</h1>
          <p className="mb-1">Frames: {data.images.original.frames}</p>
          <video muted autoPlay loop src={data.images.original_mp4.mp4} />
          <button className="btn btn-black">
            <Share2 />
          </button>
        </article>
        <aside className="sidebar">
          <a
            href={data.user?.profile_url ?? '#'}
            target={data.user && '_blank'}
            rel={data.user && 'noopener noreferrer'}
          >
            <Image
              loader={() => loadGif(data.user?.avatar_url ?? avatarFallback)}
              src={data.user?.avatar_url ?? avatarFallback}
              alt="user profile image"
              width="100"
              height="100"
            />
            <h3>{data.user?.display_name ?? 'Anonymous'}</h3>
          </a>
        </aside>
      </div>
    </Layout>
  )
}
