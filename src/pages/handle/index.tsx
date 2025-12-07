import Nav from "@/components/Nav"
import { Box, Tabs } from "@radix-ui/themes"
import { useEffect, useLayoutEffect } from "react"
import HandleRedux from "./handleRedux"
import HandleUseEffect from "./handleUseEffect"

const handleArr = [
  {
    key:'Redux',
    Component:<HandleRedux/>,
  },
  {
    key:'MobX',
    Component:<></>,
  },
  {
    key:'useEffect&useLayoutEffect&useState',
    Component:<HandleUseEffect />,
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
    手写的一些方法以及应用
    <Tabs.Root defaultValue={'Redux'}>
      <Tabs.List>
        {
          handleArr.map((handle)=>{
            return <Tabs.Trigger key={`Trigger-${handle.key}`} value={handle.key}>{handle.key}</Tabs.Trigger>
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