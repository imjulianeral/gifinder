import type { ReactNode } from 'react'

import Head from 'next/head'
import { Navbar } from './Navbar'

export type LayoutProps = {
  pageName: string
  description: string
  children: ReactNode
}

/**
 * Component which provides the skeleton to the entire website
 * @param LayoutProps The Layout properties {@link LayoutProps}
 * @returns A reusable component to be used on each page
 */
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
