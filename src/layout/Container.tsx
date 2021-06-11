import { x } from '@xstyled/styled-components'
import React from 'react'

export type ContainerProps = typeof x.div.defaultProps & {
  fluid?: boolean
}

export const Container: React.FC<ContainerProps> = React.forwardRef(function Container(
  {
    children,
    fluid,
    ...props
  },
  ref
){
  return (
    <x.div
      ref={ref}
      w="100%"
      maxWidth={
        fluid
          ? "100%"
          :{
            _: "100%",
            sm: 'calc(640px * 0.95)',
            md: 'calc(768px * 0.95)',
            lg: 'calc(1024px * 0.95)',
            xl: 'calc(1220px * 0.95)',
          }
      }
      mx="auto"
      px="12px"
      {...props}
    >
      {children}
    </x.div>
  )
})