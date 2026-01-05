import { changeNavTabVal } from "@/components/Nav/navSlice";
import { store } from "@/store";
import { Navigate, type NavigateFunction } from "react-router";

type useRouteNavigateType = {
  tabName:string;
  path:string;
  secondPage?: boolean;
}

export default (navigate: NavigateFunction, route:useRouteNavigateType) => {
  !route.secondPage && store.dispatch(changeNavTabVal({navTabVal:route.tabName}))
  navigate(route.path, { preventScrollReset: true });
}