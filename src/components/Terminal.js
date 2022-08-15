import React from 'react'
import myGif from './images/terminal.gif';
import { useMediaQuery } from 'react-responsive'

export default function Terminal() {
  let style = {}
  const isNotSmallerScreen = useMediaQuery({
    query: '(min-width: 800px)'
  })
  if (isNotSmallerScreen ? style = {width: "auto", maxWidth: 700, height: 'auto'}: style={display: 'none'})
  return (
      <img style={style} src={myGif} alt="my-gif" />
  )
}
