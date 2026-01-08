import Nav from "@/components/Nav"
import { Box, Tabs } from "@radix-ui/themes"
import { useEffect, useLayoutEffect } from "react"
import ES6 from "./ES6"
import JavaScript from "./JavaScript"

const defaultValue = 'JavaScript'

const handleArr = [
  {
    key:'JavaScript',
    tabName:'JavaScript系列',
    Component:<JavaScript/>,
  },
  {
    key:'ES6',
    tabName:'ES6系列',
    Component:<ES6/>,
  },
]

export default () => {
  useEffect(()=>{
    console.log(`${new URL(import.meta.url).pathname}-useEffect`)
  },[])

  useLayoutEffect(()=>{
    console.log(`${new URL(import.meta.url).pathname}-useLayoutEffect`)
  },[])

  return <Box>
    <Nav/>
    面试题集合
    <Tabs.Root defaultValue={defaultValue}>
      <Tabs.List>
        {
          handleArr.map((handle)=>{
            return <Tabs.Trigger key={`Trigger-${handle.key}`} value={handle.key}>{handle.tabName}</Tabs.Trigger>
          })
        }
      </Tabs.List>
      <Box pt="3">
        {
          handleArr.map((handle)=>{
            return <Tabs.Content key={`Content-${handle.key}`} value={handle.key}>{handle.Component}</Tabs.Content>
          })
        }
      </Box>
    </Tabs.Root>
  </Box>
}