import type { ReactNode } from 'react'

import Head from 'next/head'
import { Navbar } from './Navbar'

interface LayoutProps {
  pageName: string
  description: string
  children: ReactNode
}

export function Layout({ pageName, description, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{pageName} | GiFinder</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container page-margin">{children}</main>
    </>
  )
}
