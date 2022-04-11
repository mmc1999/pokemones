import Head from 'next/head'
import React from 'react'
import { Navbar } from '../ui';

export const Layout = ({children, title = "Pokemon app"}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="author" content="tima " />
            <meta name='description' content={`info de pokemon ${title}`} />
            <meta name='keywords' content={`${title}, pokemon, pokedex`} />
            <meta property="og:title" content="Informacion sobre el pokemon" />
            <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
            <meta property="og:image" content={`${origin}/imgs/banner.png`} />
        </Head>

        <Navbar />

        <main style={{
          padding:"0px 20px"
        }}>
            {children}
        </main>
    </>
  )
}