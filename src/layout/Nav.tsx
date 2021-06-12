import styled, { SystemProps, x } from '@xstyled/styled-components'
import React from 'react'

export type NavProps = SystemProps & {
  
}

const NavBox = styled.ulBox`
  a {
    display: block;
    padding: .5rem 1rem;
    text-decoration: none;
  }
`

export const Nav: React.FC<NavProps> = React.forwardRef(function Nav(
  {
    children,
    ...props
  },
  ref
){
  return (
    <NavBox
      ref={ref}
      display="flex"
      flexWrap="wrap"
      pl="0"
      my="0"
      listStyleType="none"
      {...props}
    >
      {children}
    </NavBox>
  )
})