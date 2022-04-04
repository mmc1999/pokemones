import { Image, Spacer, Text, useTheme, Link } from '@nextui-org/react'
import NextLink from 'next/link'
import React from 'react'


export const Navbar = () => {
    const {theme} = useTheme()

  return (
    <div style={{
        display:'flex',
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        padding: "0px 20px",
        background: theme.colors.gray900.value
    }}>
      <NextLink href="/" passHref>
        <Link>
          <Text h2>Pokemon</Text>
        </Link>
        </NextLink>
        <Spacer css={{flex:1}} />
        <NextLink href="/favorites" passHref>
          <Link >
              <Text h3>Favoritos</Text>
          </Link>
        </NextLink>
    </div>
  )
}
