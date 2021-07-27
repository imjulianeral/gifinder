import type { GetServerSideProps, GetServerSidePropsContext } from 'next'

import { useRouter } from 'next/router'
import { Search } from 'react-feather'

import { GifList, Layout } from '@components/ui'
import { GifListResponse } from '@typeDefs/Giphy'

export const getServerSideProps: GetServerSideProps<GifListResponse> = async ({
  query,
}: GetServerSidePropsContext) => {
  if (query.search) {
    const uri = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_KEY}&q=${query.search}`
    const req = await fetch(uri)
    const res: GifListResponse = await req.json()

    return {
      props: {
        ...res,
      },
    }
  }

  return {
    props: {
      data: [],
      meta: {
        msg: 'No search term provided',
        status: 406,
        response_id: 'qwerty',
      },
      pagination: {
        count: 0,
        offset: 0,
        total_count: 0,
      },
    },
  }
}

export default function Home({ data }: GifListResponse) {
  const router = useRouter()

  return (
    <Layout pageName="Home" description="A search engine to find gif images">
      <form className="search-bar">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          autoComplete="off"
          className="search-bar__input"
        />
        <button
          type="submit"
          aria-label="search button"
          className="search-bar__btn btn btn-black"
        >
          <Search />
        </button>
      </form>

      {router.query.search && <h1>{router.query.search}</h1>}
      {data.map(gif => (
        <GifList key={gif.id} gif={gif} />
      ))}
    </Layout>
  )
}
