import { Box, Button } from "@radix-ui/themes"
import { Suspense, use, useEffect, useLayoutEffect, useState } from "react"
import { fetchData } from "./data";
import Loading from "@/components/Loading";

export default () => {
  const [show, setShow] = useState(false);
  function download() {
    setShow(true);
  }

  console.log('show',show);

  useEffect(()=>{
    console.log(`${new URL(import.meta.url).pathname}-useEffect`)
  },[])

  useLayoutEffect(()=>{
    console.log(`${new URL(import.meta.url).pathname}-useLayoutEffect`)
  },[])

  return <Box>
    childSuspense
    {
      show?
      <Suspense fallback={<Loading/>}>
        <UseMessage/>
      </Suspense>:
      <Button onClick={download}>clickLoad</Button>
    }
  </Box>
}


function UseMessage() {
  const useVal = use(fetchData('useVal'));
  console.log('useVal',useVal);
  return <p>Here is the use message: {useVal}</p>;
}

