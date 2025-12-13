import Nav from "@/components/Nav"
import { Box, Tabs } from "@radix-ui/themes"
import { useEffect, useLayoutEffect } from "react"
import HandleRedux from "./handleRedux"
import HandleUseEffect from "./handleUseEffect"
import HandlePromise from "./handlePromise"

const handleArr = [
  {
    key:'Currying',
    tabName:'柯里化',
    Component:<HandlePromise/>,
  },
  {
    key:'Promise',
    tabName:'Promise',
    Component:<HandlePromise/>,
  },
  {
    key:'Redux',
    tabName:'Redux',
    Component:<HandleRedux/>,
  },
  {
    key:'MobX',
    tabName:'MobX',
    Component:<></>,
  },
  {
    key:'useEffect&useLayoutEffect&useState',
    tabName:'手写useEffect等',
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
    <Tabs.Root >
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