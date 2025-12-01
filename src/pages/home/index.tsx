import Nav from "@/components/Nav"
import { Box } from "@radix-ui/themes"
import { useEffect, useLayoutEffect } from "react"

export default () => {

  useEffect(()=>{
    console.log(`${new URL(import.meta.url).pathname}-useEffect`)
  },[])

  useLayoutEffect(()=>{
    console.log(`${new URL(import.meta.url).pathname}-useLayoutEffect`)
  },[])

  return <Box>
    <Nav/>
    home
  </Box>
}