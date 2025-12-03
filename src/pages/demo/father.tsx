import { Box } from "@radix-ui/themes"
import { useEffect, useLayoutEffect } from "react"
import Child from "./childDetail"
import ChildUseTransition from "./childUseTransition"
import ChildSuspense from "./childSuspense"
import ChildUseDeferredValue from "./childUseDeferredValue"

export default () => {

  useEffect(()=>{
    console.log(`${new URL(import.meta.url).pathname}-useEffect`)
  },[])

  useLayoutEffect(()=>{
    console.log(`${new URL(import.meta.url).pathname}-useLayoutEffect`)
  },[])


  return <Box>
    father
    <Child/>
    <ChildUseTransition/>
    <ChildSuspense/>
    <ChildUseDeferredValue/>
  </Box>
}