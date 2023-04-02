import React from 'react'
import { theme } from './Theme'

export const Box = () => {
  return (
    <div style={{backgroundColor: theme.primary.main,color:theme.primary.text}}>Theme context</div>
  )
}
