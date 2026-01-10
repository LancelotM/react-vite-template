import { Box } from "@radix-ui/themes"

export default ()=> {
  const webpackArr = [
    {
      href:'https://github.com/febobo/web-interview/issues/132',
      text:'如何提高webpack的构建速度？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/131',
      text:'说说如何借助webpack来优化前端性能？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/130',
      text:'说说webpack proxy工作原理？为什么能解决跨域?',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/126',
      text:'说说webpack的热更新是如何做到的？原理是什么？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/125',
      text:'说说Loader和Plugin的区别？编写Loader，Plugin的思路？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/124',
      text:'说说webpack中常见的Plugin？解决了什么问题？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/123',
      text:'说说webpack中常见的Loader？解决了什么问题?',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/122',
      text:'说说webpack的构建流程?',
    },
  ]
  return <Box>
    {
      webpackArr.map((item)=>{
        return <h2 key={item.text}>
          <a href={item.href} target='_blank'>{item.text}</a>
        </h2>
      })
    }
  </Box>
}