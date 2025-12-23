import { Box, Button } from "@radix-ui/themes"

// 保存所有 hook 的状态
let hookStatesMap: Map<any,any> = new Map();
// 当前执行到第几个 hook
let hookIndex = 0;

type EffectsImteType = {
  callback:()=>void,
  index:number,
}

// 区分 layoutEffects 与 passiveEffects
let layoutEffects: EffectsImteType[] = [];
let passiveEffects: EffectsImteType[] =[];

const useState = (initialState: any) =>{
  const currentIndex = hookIndex;

  const currentState = hookStatesMap.get(currentIndex) ?? initialState;
  hookStatesMap.set(currentIndex,currentState)
  

  function setState (newState: any){
    const newValue = typeof newState === "function" ? newState(hookStatesMap.get(currentIndex)) :newState
    hookStatesMap.set(currentIndex,newValue)
    render(); // 触发组件重新渲染
  }
  hookIndex++;
  return [hookStatesMap.get(currentIndex),setState]
}

const useLayoutEffectCommon = (callback:()=>void,deps:any[],isLayout:boolean) => {
  const currentIndex = hookIndex;
  const prevDeps = hookStatesMap.get(currentIndex);

  // 判断是否要执行 effect（依赖是否变化）
  let hasChanged = true;
  if (prevDeps) {
    hasChanged = deps.some((dep, i) => dep !== prevDeps[i]);
  }

  if (hasChanged) {
    isLayout ?
    layoutEffects.push({ callback, index: currentIndex }):
    passiveEffects.push({ callback, index: currentIndex });
    // 保存依赖
    hookStatesMap.set(currentIndex,deps); 
  }
  hookIndex++;
}

const useLayoutEffect = (callback:()=>void,deps:any[]) => {
  useLayoutEffectCommon(callback,deps,true);
}

const useEffect = (callback:()=>void,deps:any[]) => {
  useLayoutEffectCommon(callback,deps,false);
}

const render = () => {
  hookIndex = 0;
  layoutEffects = [];
  passiveEffects = [];
  // 执行组件逻辑，收集 hooks
  HandleApp();
  // commit phase：
  // 1. 同步执行 layoutEffects（模拟 useLayoutEffect）
  layoutEffects.forEach(e => {
    const cleanup = hookStatesMap.get(e.index + "_cleanup");
    if (cleanup && typeof cleanup === "function") cleanup();
    hookStatesMap.set(e.index + "_cleanup",e.callback());
  });
  // 2. 异步执行 passiveEffects（模拟 useEffect）
  setTimeout(() => {
    passiveEffects.forEach(e => {
      const cleanup = hookStatesMap.get(e.index + "_cleanup");
      if (cleanup && typeof cleanup === "function") cleanup();
      hookStatesMap.set(e.index + "_cleanup",e.callback());
    });
  },0);
}

const HandleApp = ()=> {
  /** 这里正常不用重制 */
  hookIndex = 0;
  
  // console.log('hookStatesMap',hookStatesMap);
  const [count,setCount] = useState(0);
  const [val,setVal] = useState(10);

  useLayoutEffect(() => {
    console.log("useLayoutEffect → 首次渲染");
    return () => {
      console.log("useLayoutEffect cleanup 首次渲染-注销");
    };
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect → 同步执行, count:", count);
    return () => {
      console.log("useLayoutEffect cleanup count-注销");
    };
  }, [count]);

  useEffect(()=>{
    console.log('useEffect-首次渲染');
    return ()=>{
      console.log('useEffect-首次渲染-注销');
    }
  },[])

  useEffect(()=>{
    console.log('useEffect-count',count);
    return ()=>{
      console.log('useEffect-count注销');
    }
  },[count])

  useEffect(()=>{
    console.log('useEffect-val',val);
    return ()=>{
      console.log('useEffect-val注销');
    }
  },[val])

  console.log("Render:hookStatesMap", hookStatesMap);
  console.log("Render:layoutEffects", layoutEffects);
  console.log("Render:passiveEffects", passiveEffects);
  console.log("Render:", { count, val });

  return <Box>
    <Box>
      <Button onClick={()=>setCount((count: any)=>count + 1)}>+</Button>
      count
      <Button onClick={()=>setCount((count: any)=>count - 1)}>-</Button>
    </Box>
    <Box>
      <Button onClick={()=>setVal((val: any)=>val+1)}>+</Button>
      value
      <Button onClick={()=>setVal((val: any)=>val-1)}>-</Button>
    </Box>
  </Box>
}

render()

export default HandleApp;