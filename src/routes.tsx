import { Box, Button, Link } from "@radix-ui/themes";
import { useState } from "react";
import { createBrowserRouter } from "react-router";
import reactLogo from '@/assets/react.svg'
import viteLogo from '/public/vite.svg'
import { homeRoute } from "@/pages/home/route";
import { demoRoute } from "@/pages/demo/route";
import { childDetailRoute } from "@/pages/demo/childDetail/route";
import { handleRoute } from "@/pages/handle/route";

export function NotFindEle() {
  const [count, setCount] = useState(0)
  
  return <Box>
      <Box>
        <Link href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
        <Link href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </Box>
      <h1>Vite + React</h1>
      <Box >
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Box>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Box>
      </Box>
      <Box >
        Click on the Vite and React logos to learn more
      </Box>
  </Box>
}

export const routerArr = [
  homeRoute,
  demoRoute,
  childDetailRoute,
  handleRoute,
]

export const router = createBrowserRouter(routerArr.map((item)=>{
  return {
    ...item,
    errorElement:<NotFindEle/>
  }
}));