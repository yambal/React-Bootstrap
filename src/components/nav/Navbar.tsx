import styled, { SystemProps, x } from '@xstyled/styled-components'
import React from 'react'
import { BootstrapBoxColorVariants, boxVariant } from '../../'
import { Container } from '../../'

export type NavBarProps = SystemProps & BootstrapBoxColorVariants & {
  fluid?: boolean
  fixedTop?: boolean
  fixedBottom?: Boolean
}

const NavBarBox = styled.navBox<BootstrapBoxColorVariants>`
  ${props => boxVariant(props)}
`

export const NavBar: React.FC<NavBarProps> = React.forwardRef(function NavBar(
  {
    children,
    fluid,
    fixedTop,
    fixedBottom,
    ...props
  },
  ref
){
  return (
    <NavBarBox
      ref={ref}
      position={
        (fixedTop || fixedBottom)
          ? "fixed"
          : "relative"
      }
      top={
        fixedTop && "0"
      }
      bottom={
        fixedBottom && "0"
      }
      right={
        (fixedTop || fixedBottom) && "0"
      }
      left={
        (fixedTop || fixedBottom) && "0"
      }
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="space-between"
      py="0.5rem"
      zIndex="1030"
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
    </NavBarBox>
  )
})