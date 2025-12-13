import { Box, Button, Flex, Spinner } from "@radix-ui/themes"
import { useCallback, useEffect, useLayoutEffect, useState, useTransition } from "react"

export default () => {
  const [ isPending, startTransition ] = useTransition();
  const [ val, setVal ] = useState('init');

  useEffect(()=>{
    console.log(`${new URL(import.meta.url).pathname}-useEffect`)
  },[])

  useLayoutEffect(()=>{
    console.log(`${new URL(import.meta.url).pathname}-useLayoutEffect`)
  },[])

  const hanleClick = useCallback(()=>{
    return new Promise((resolve)=>{
      setTimeout(() => {
        resolve('success')
      }, 2000);
    })
  },[])

  return <Box>
    childSuspense
    <Button disabled={isPending} onClick={()=>{
      setVal('changeing')
      startTransition(async ()=>{
        await hanleClick()
        setVal('changeed')
      })
    }}>clickLoad</Button>
    <Box>{val}</Box>
    <Flex justify='center'>
    {isPending ? <Spinner size="3" /> : null} 
    </Flex>
  </Box>
}