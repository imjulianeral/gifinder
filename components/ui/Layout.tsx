import type { ReactNode } from 'react'

import Head from 'next/head'
import { Navbar } from './Navbar'

export type LayoutProps = {
  pageName: string
  description: string
  cover?: string
  children: ReactNode
}

/**
 * Component which provides the skeleton to the entire website
 * @param LayoutProps The Layout properties {@link LayoutProps}
 * @returns A reusable component to be used on each page
 */
export function Layout({ pageName, description, cover, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{pageName} | GiFinder</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        {/* Google / Search Engine Tags  */}
        <meta itemProp="name" content={pageName} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={cover} />

        {/* Facebook Meta Tags  */}
        <meta property="og:url" content="https://gifinder.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageName} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={cover} />

        {/* Twitter Meta Tags  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageName} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={cover} />
      </Head>
      <Navbar />
      <main className="container page-margin">{children}</main>
    </>
  )
}
