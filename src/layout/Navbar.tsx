import { x } from '@xstyled/styled-components'
import React from 'react'
import { Container } from './'

export type NavBarProps = typeof x.nav.defaultProps & {
  fluid?: boolean
}


export const NavBar: React.FC<NavBarProps> = React.forwardRef(function NavBar(
  {
    children,
    fluid,
    ...props
  },
  ref
){
  return (
    <x.nav
      ref={ref}
      position="relative"
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="space-between"
      bg="#f8f9fa"
      py="0.5rem"
      {...props}
    >
      <Container
        fluid={fluid}
        display="flex"
        flexWrap="inherit"
        alignItems="center"
        justifyContent="space-between"
      >
        {children}
      </Container>
    </x.nav>
  )
})

/*
position: relative;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
padding-top: .5rem;
padding-bottom: .5rem;
*/