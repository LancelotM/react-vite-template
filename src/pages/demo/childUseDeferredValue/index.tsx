import { Box, Flex, TextField } from "@radix-ui/themes"
import { lazy, Suspense, useDeferredValue, useEffect, useLayoutEffect, useState } from "react"
import Loading from "@/components/Loading";
const SlowListPreview = lazy(() => import('./SlowList.js'));

export default () => {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text,'');

  useEffect(()=>{
    console.log(`${new URL(import.meta.url).pathname}-useEffect`)
  },[])

  useLayoutEffect(()=>{
    console.log(`${new URL(import.meta.url).pathname}-useLayoutEffect`)
  },[])

  return <Box>
    childUseDeferredValue
    <Flex direction='column' justify='center' align='center'>
      <Box width="300px">
        <TextField.Root value={text} onChange={e => setText(e.target.value)} size="3" placeholder="Search the docs…" />
      </Box>
      <Suspense fallback={<Loading/>}>
        <Flex width="300px" justify='start' maxHeight='150px' overflow='auto' style={{marginTop:'10px',background:'#000',color:'#fff'}}>
          <SlowListPreview text={deferredText} />
        </Flex>
      </Suspense>
    </Flex>
  </Box>
}