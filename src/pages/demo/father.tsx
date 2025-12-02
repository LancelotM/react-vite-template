import { Box } from "@radix-ui/themes"
import { Suspense, useEffect, useLayoutEffect } from "react"
import Child from "./childDetail"
import ChildUseTransition from "./childUseTransition"
import ChildSuspense from "./childSuspense"

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
    <Suspense fallback={<Loading/>}>
      <ChildSuspense/>
    </Suspense>
  </Box>
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
