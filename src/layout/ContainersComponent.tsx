import { x } from '@xstyled/styled-components'
import React from 'react'

export type ContainersComponent = typeof x.div.defaultProps & {

}

export const ContainersComponent: React.FC = React.forwardRef(function ContainersComponent(
  {
    children,
  },
  ref
){
  return (
    <x.div
      ref={ref}
    >
      {children}
    </x.div>
  )
})