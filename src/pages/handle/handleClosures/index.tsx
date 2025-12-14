import { Box } from "@radix-ui/themes"
// import './test.js'
import {sumClosures} from './method.js'

export default ()=> {

  let sumBase = sumClosures(2);

  return <Box>
    <Box>sumBase(5):{sumBase(5)}</Box>
    <Box>sumBase(10):{sumBase(10)}</Box>
  </Box>
}