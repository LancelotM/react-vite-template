import { Box } from "@radix-ui/themes"

export default ()=> {
  const typescriptArr = [
    {
      href:'https://github.com/febobo/web-interview/issues/253',
      text:'说说对 TypeScript 中命名空间与模块的理解？区别？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/252',
      text:'说说你对 TypeScript 装饰器的理解？应用场景？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/251',
      text:'说说你对 TypeScript 中高级类型的理解？有哪些？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/250',
      text:'说说你对 TypeScript 中泛型的理解？应用场景？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/255',
      text:'说说你对 TypeScript 中函数的理解？与 JavaScript 函数的区别？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/249',
      text:'说说你对 TypeScript 中类的理解？应用场景？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/248',
      text:'说说你对 TypeScript 中接口的理解？应用场景？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/247',
      text:'说说你对 TypeScript 中枚举类型的理解？应用场景？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/246',
      text:'说说 typescript 的数据类型有哪些？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/245',
      text:'说说你对 typescript 的理解？与 javascript 的区别？',
    },
  ]
  return <Box>
    {
      typescriptArr.map((item)=>{
        return <h2 key={item.text}>
          <a href={item.href} target='_blank'>{item.text}</a>
        </h2>
      })
    }
  </Box>
}