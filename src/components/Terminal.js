import React from 'react'
import myGif from './images/terminal.gif';
import { useMediaQuery } from '@chakra-ui/react'

export default function Terminal() {
  let style = {}
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")
  if (isNotSmallerScreen ? style = {width: "auto", maxWidth: 800, height: 'auto',}: style={display: 'none'})
  return (
      <img style={style} src={myGif} alt="my-gif" />
  )
}
