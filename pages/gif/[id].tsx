import type { GetServerSideProps, GetServerSidePropsContext } from 'next'

import Image from 'next/image'
import { useCallback } from 'react'
import { Share2 } from 'react-feather'
import toast from 'react-hot-toast'

import { Layout } from '@components/ui'
import { SingleGifResponse } from '@typeDefs/Giphy'

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const uri = `https://api.giphy.com/v1/gifs/${query.id}?api_key=${process.env.GIPHY_KEY}`
  const req = await fetch(uri)
  const res: SingleGifResponse = await req.json()

  return {
    props: {
      ...res,
    },
  }
}

export default function Details({ data }: SingleGifResponse) {
  const loadGif = useCallback((url: string) => url, [])
  const avatarFallback = 'https://media.giphy.com/media/j6aoUHK5YiJEc/giphy.gif'

  const copyToClipboard = useCallback(async () => {
    toast.promise(
      navigator.clipboard.writeText(location.href),
      {
        loading: 'Copying...',
        success: <b>Copied to clipboard!</b>,
        error: <b>Could not be copied to clipboard.</b>,
      },
      {
        style: {
          fontSize: '1.6rem',
          borderRadius: '3rem',
          color: '#fff',
          backdropFilter: 'blur(15px) saturate(180%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        // iconTheme: {
        //   primary: 'rgba(0, 238, 255, 0.75)',
        //   secondary: '#fff',
        // },
      }
    )
  }, [])

  return (
    <Layout pageName={data.slug} description={`${data.slug}' Detail Page`}>
      <div className="grid">
        <article className="article">
          <h1>{data.title}</h1>
          <p className="mb-1">
            Dimensions: {data.images.original.width}x{data.images.original.height}
          </p>
          <p className="mb-1">Frames: {data.images.original.frames}</p>
          <a href={data.url} target="_blank" rel="noopener noreferrer">
            <video muted autoPlay loop src={data.images.original_mp4.mp4} />
          </a>
          <button className="btn btn-black w-50 m-auto mt-2" onClick={copyToClipboard}>
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
              width="100%"
              height="100%"
            />
            <h3>{data.user?.display_name ?? 'Anonymous'}</h3>
          </a>
        </aside>
      </div>
    </Layout>
  )
}
