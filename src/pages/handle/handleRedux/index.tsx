import { Box } from "@radix-ui/themes"
import { createStore } from "./method.js";

const store = createStore(todos, ["Use Redux"]);

function todos(state = [], action: { type: any; text: any; }) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        action.text,
      ];
    default:
      return state;
  }
}

store.subscribe(()=>{
  console.log('subscribe',store.getState())
})

export default ()=> {
  store.dispatch({
    type: "ADD_TODO",
    text: "Read the docs",
  });

  store.dispatch({
    type: "ADD_TODO",
    text: "ADD_TODO2,ADD_TODO2",
  });

  return <Box>
    {store.getState()}
  </Box>
}