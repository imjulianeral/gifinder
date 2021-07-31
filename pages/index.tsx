import type { GetServerSideProps, GetServerSidePropsContext } from 'next'

import { useRouter } from 'next/router'
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import { Search } from 'react-feather'
import { z } from 'zod'

import { GifList, Layout } from '@components/ui'
import { GifListResponse } from '@typeDefs/Giphy'
import toast from 'react-hot-toast'

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
        response_id: 'YfUPXugqvtdGi5',
      },
      pagination: {
        count: 0,
        offset: 0,
        total_count: 0,
      },
    },
  }
}

/**
 * The Home page
 * @param GifListResponse The response with all the gif images {@link GifListResponse}
 * @returns A page with the possibility of searching gif images & display them
 */

export default function Home({ data, meta }: GifListResponse) {
  const [search, setSearch] = useState('')
  const router = useRouter()
  const formSchema = z.string()

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, [])

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      try {
        // validates if the user input is an string
        formSchema.parse(search)
        // if it's a string then adds a search parameter to perform the query in getServerSideProps
        router.push(`/?search=${search}`)
      } catch (error) {
        // if the validation fails, then show a toast
        toast.error('Please write a valid text', {
          style: {
            fontSize: '1.6rem',
            borderRadius: '3rem',
            color: '#fff',
            backdropFilter: 'blur(15px) saturate(180%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        })
      }
    },
    [formSchema, search, router]
  )

  useEffect(() => {
    if (router.query.search && meta.status !== 200) {
      toast.error(meta.msg, {
        style: {
          fontSize: '1.6rem',
          borderRadius: '3rem',
          color: '#fff',
          backdropFilter: 'blur(15px) saturate(180%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      })
    }
  }, [router.query.search, meta])

  return (
    <Layout pageName="Home" description="A search engine to find gif images">
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search the gif you love 💙"
          autoComplete="off"
          className="search-bar__input"
          onChange={handleChange}
          value={search}
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

      <section className="gallery">
        {data.map(gif => (
          <GifList key={gif.id} gif={gif} />
        ))}
      </section>
    </Layout>
  )
}
