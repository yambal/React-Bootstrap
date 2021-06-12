import { x } from '@xstyled/styled-components'
import React from 'react'

export type NavItemProps = typeof x.li.defaultProps & {

}

export const NavItem: React.FC<NavItemProps> = React.forwardRef(function NavItem(
  {
    children,
    ...props
  },
  ref
){
  return (
    <x.li
      ref={ref}
      {...props}
    >
      {children}
    </x.li>
  )
})