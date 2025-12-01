import { Box } from "@radix-ui/themes"
import { useEffect, useLayoutEffect } from "react"
import Child from "./childDetail"

export default () => {

  useEffect(()=>{
    console.log(`${new URL(import.meta.url).pathname}-useEffect`)
  },[])

  useLayoutEffect(()=>{
    console.log(`${new URL(import.meta.url).pathname}-useLayoutEffect`)
  },[])


  return <Box>
    father
    <Child />
  </Box>
}