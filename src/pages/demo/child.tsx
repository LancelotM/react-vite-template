import { Box, Button } from "@radix-ui/themes"
import { useEffect, useLayoutEffect } from "react"
import routeNavigate from "@/utils/routeNavigate"
import { useNavigate } from "react-router"
import { childDetailRoute } from "./childDetail/route"

export default () => {
  const navigate = useNavigate();

  useEffect(()=>{
    console.log(`${new URL(import.meta.url).pathname}-useEffect`)
  },[])

  useLayoutEffect(()=>{
    console.log(`${new URL(import.meta.url).pathname}-useLayoutEffect`)
  },[])


  return <Box>
    child
    <Button 
      onClick={()=>{
        routeNavigate(navigate,childDetailRoute)
      }}
    >go to childDetail</Button>
  </Box>
}