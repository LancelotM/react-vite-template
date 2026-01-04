import { routerArr } from "@/routes";
import { Tabs } from "@radix-ui/themes"
import './index.css'
import { useNavigate } from "react-router";
import { store } from "@/store";
import { changeNavTabVal } from "./navSlice";


export default () =>{
  const navigate = useNavigate();

  return <Tabs.Root defaultValue={store.getState().navSlice.navTabVal}>
    <Tabs.List justify='center' className="nav" >
      {
        routerArr.map((route)=>{
          return route.tabName && <Tabs.Trigger key={route.tabName} value={route.tabName}
            onClick={()=>{
              store.dispatch(changeNavTabVal({navTabVal:route.tabName}))
              navigate(route.path, { preventScrollReset: true });
            }}>
          {route.tabName}
        </Tabs.Trigger>
        })
      }
    </Tabs.List>
  </Tabs.Root>
}