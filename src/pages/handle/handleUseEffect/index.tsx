import { Box, Button } from "@radix-ui/themes"

// 保存所有 hook 的状态
let hookStatesMap: Map<any,any> = new Map();
let hookIndex = 0   // 当前执行到第几个 hook

const useState = (initialState: any) =>{
  const currentIndex = hookIndex;

  const currentState = hookStatesMap.get(currentIndex) ?? initialState;
  hookStatesMap.set(currentIndex,currentState)
  

  function setState (newState: any){
    hookStatesMap.set(currentIndex,newState)
    render(); // 触发组件重新渲染
  }
  hookIndex++;
  return [hookStatesMap.get(currentIndex),setState]
}

const useEffect = (callback:()=>void,deps:any[]) => {
  const currentIndex = hookIndex;
  const prevDeps = hookStatesMap.get(currentIndex);

  // 判断是否要执行 effect（依赖是否变化）
  let hasChanged = true;
  if (prevDeps) {
    hasChanged = deps.some((dep, i) => dep !== prevDeps[i]);
  }

  if (hasChanged) {
    // 如果上一次有 cleanup，则先执行
    if (hookStatesMap.has(currentIndex + "_cleanup")) {
      hookStatesMap.get(currentIndex + "_cleanup")();
    }
    
    // 执行 effect 回调
    const cleanup = callback();
    if (typeof cleanup === "function") {
      hookStatesMap.set(currentIndex + "_cleanup",cleanup);
    }
    // 保存依赖
    hookStatesMap.set(currentIndex,deps); 
  }

  hookIndex++;
}

const render = () => {
  hookIndex = 0;
  HandleApp();
}

const HandleApp = ()=> {
  // console.log('hookStatesMap',hookStatesMap);
  const [count,setCount] = useState(0);
  const [val,setVal] = useState(10);

  useEffect(()=>{
    console.log('首次渲染');
    return ()=>{
      console.log('注销');
    }
  },[])

  useEffect(()=>{
    console.log('count',count);
    return ()=>{
      console.log('count注销');
    }
  },[count])

  useEffect(()=>{
    console.log('val',val);
    return ()=>{
      console.log('val注销');
    }
  },[val])

  return <Box>
    <Box>
      <Button onClick={()=>setCount(count+1)}>+</Button>
      <Button onClick={()=>setCount(count-1)}>-</Button>
    </Box>
    <Box>
      <Button onClick={()=>setVal(val+1)}>+</Button>
      <Button onClick={()=>setVal(val-1)}>-</Button>
    </Box>
  </Box>
}

export default HandleApp;