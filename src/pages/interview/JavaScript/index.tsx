import { Box } from "@radix-ui/themes"

export default ()=> {
  const JavaScriptArr = [
    //TODO （这个太综合了，需要自己是实现一下）置顶
    {
      href:'https://github.com/febobo/web-interview/issues/89',
      text:'大文件上传如何做断点续传？（这个太综合了，需要自己是实现一下）置顶',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/92',
      text:'web常见的攻击方式有哪些？如何防御？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/91',
      text:'什么是单点登录？如何实现？',
    },
    {
      href:'https://www.jianshu.com/p/b5fcb9a04b17',
      text:'防抖、节流',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/62',
      text:'谈谈this对象的理解',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/59',
      text:'原型，原型链 ? 有什么特点？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/58',
      text:'对作用域链的理解',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/57',
      text:'说说你对闭包的理解？闭包使用场景',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/51',
      text:'JavaScript中的数据类型？区别？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/56',
      text:'深拷贝浅拷贝的区别？如何实现一个深拷贝？',
    },
  ]
  return <Box>
    {
      JavaScriptArr.map((item)=>{
        return <h2 key={item.text}>
          <a href={item.href} target='_blank'>{item.text}</a>
        </h2>
      })
    }
  </Box>
}