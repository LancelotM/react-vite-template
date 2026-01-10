import { Box, Flex } from "@radix-ui/themes"
import './index.css'

export default ()=> {
  const CSSArr = [
    {
      href:'https://github.com/febobo/web-interview/issues/119',
      text:'对Css预编语言的理解？有哪些区别?',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/117',
      text:'CSS如何画一个三角形？原理是什么？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/108',
      text:'什么是响应式设计？响应式设计的基本原理是什么？如何做？',
    },
  ]
  return <Box className="cssStyle">
    {
      CSSArr.map((item)=>{
        return <h2 key={item.text}>
          <a href={item.href} target='_blank'>{item.text}</a>
        </h2>
      })
    }
    <Flex justify='between'>
      <div className="border border1"/>
      <div className="border border2"/>
      <div className="border border3"/>
      <div className="border border4"/>
    </Flex>
  </Box>
}