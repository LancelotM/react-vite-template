let hookStates = [] // 保存所有 hook 的状态
let hookIndex = 0   // 当前执行到第几个 hook

const useHandleState = (initialState) =>{
  const currentIndex = hookIndex;
  hookStates[currentIndex] = hookStates[currentIndex] ?? initialState;

  function setState (newState){
    hookStates[currentIndex] = newState;
    render(); // 触发组件重新渲染
  }
  hookIndex++;
  return [hookStates[currentIndex],setState]
}

const render = (App) => {
  hookIndex = 0;
  App();
}


export {
  render,
  useHandleState,
}