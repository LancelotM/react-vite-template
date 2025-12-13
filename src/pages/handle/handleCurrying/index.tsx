import { Box } from "@radix-ui/themes"
import { curry } from "./method.js";

export default ()=> {

  const sum = (a: number,b: number,c: number,d: number)=>{
    return a+b+c+d;
  }

  function add(a: number, b: number) {
    return a + b;
  }

  return <Box>
    <Box>curry(sum)(1,2)(3)(4):{curry(sum)(1)(2)(3)(4)}</Box>
    <Box>curry(sum,1)(2,3)(4):{curry(sum,1)(2,3)(4)}</Box>
    <Box>curry(sum,1,2)(3)(4:{curry(sum,1,2)(3)(4)}</Box>
    <Box>curry(sum,1,2)(3,4):{curry(sum,1,2)(3,4)}</Box>
    <Box>curry(add)(1)(2):{curry(add)(1)(2)}</Box>
  </Box>
}