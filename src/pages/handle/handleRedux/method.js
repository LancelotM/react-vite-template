export function createStore(reducer, initialState) {
  let state = initialState;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action); // 调用 reducer 纯函数更新状态
    listeners.forEach(listener => listener()); // 通知订阅者
  }

  function subscribe(listener) {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }

  // dispatch({ type: '@@INIT' }); // 初始化

  return { getState, dispatch, subscribe };
}