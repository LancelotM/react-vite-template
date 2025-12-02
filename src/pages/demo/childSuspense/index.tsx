import { Box, Button } from "@radix-ui/themes"
import { use, useCallback, useEffect, useLayoutEffect, useState } from "react"

const hanleClick = async ()=>{
  await new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
  console.log('等了2s之后了');
  // return []
}

export default () => {
  // const [ val, setVal ] = useState('init');
  const useVal = use(hanleClick());

  console.log('useVal',useVal);

  useEffect(()=>{
    console.log(`${new URL(import.meta.url).pathname}-useEffect`)
  },[])

  useLayoutEffect(()=>{
    console.log(`${new URL(import.meta.url).pathname}-useLayoutEffect`)
  },[])

  return <Box>
    childSuspense
    {/* <Button onClick={hanleClick}>clickLoad</Button> */}
    {/* <Box>staue{val}</Box> */}
    <Box>use{useVal}</Box>
  </Box>
}