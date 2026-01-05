import { routerArr } from "@/routes";
import { Tabs } from "@radix-ui/themes"
import './index.css'
import { store } from "@/store";
import {  useLayoutEffect } from "react";
import routeNavigate from "@/utils/routeNavigate";
import { useNavigate } from "react-router";

export default () =>{
  const navigate = useNavigate();

  useLayoutEffect(()=>{
    console.log('useEffect-nav');
  },[])

  return <Tabs.Root defaultValue={store.getState().navSlice.navTabVal}>
    <Tabs.List justify='center' className="nav" >
      {
        routerArr.map((route)=>{
          return route.tabName && !route.secondPage && <Tabs.Trigger key={route.tabName} value={route.tabName}
            onClick={()=>{
              routeNavigate(navigate,route)
            }}>
            {route.tabName}
          </Tabs.Trigger>
        })
      }
    </Tabs.List>
  </Tabs.Root>
}