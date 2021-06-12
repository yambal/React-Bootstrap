import styled, { SystemProps, x } from '@xstyled/styled-components'
import { readableColor } from 'polished'
import React from 'react'
import { bsReadableColor, ColorNameVariants, boxVariant } from '../style/colorNames'
import { Container } from './'

export type NavBarProps = SystemProps & ColorNameVariants & {
  fluid?: boolean
  fixedTop?: boolean
  fixedBottom?: Boolean
}

const NavBarBox = styled.navBox<ColorNameVariants>`
  ${props => props.primary && boxVariant(props)}
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

/*
position: relative;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
padding-top: .5rem;
padding-bottom: .5rem;
*/