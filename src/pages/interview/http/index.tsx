import { Box } from "@radix-ui/themes"

export default ()=> {
  const httpArr = [
    //TODO （这个太综合了，需要自己是实现一下）置顶
    {
      href:'https://github.com/febobo/web-interview/issues/152',
      text:'说说对WebSocket的理解？应用场景？（这个太综合了，需要自己是实现一下）置顶',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/151',
      text:'说说TCP为什么需要三次握手和四次挥手？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/150',
      text:'说说地址栏输入 URL 敲下回车后发生了什么？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/149',
      text:'说说 HTTP 常见的请求头有哪些? 作用？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/145',
      text:'说一下 GET 和 POST 的区别？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/144',
      text:'说说HTTP 常见的状态码有哪些，适用场景？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/143',
      text:'说说 HTTP1.0/1.1/2.0 的区别? ',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/142',
      text:'如何理解CDN？说说实现原理？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/141',
      text:'DNS协议 是什么？说说DNS 完整的查询过程?',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/140',
      text:'如何理解TCP/IP协议?',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/136',
      text:'如何理解UDP 和 TCP? 区别? 应用场景?',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/135',
      text:'为什么说HTTPS比HTTP安全? HTTPS是如何保证安全的？',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/134',
      text:'什么是HTTP? HTTP 和 HTTPS 的区别?',
    },
  ]
  return <Box>
    {
      httpArr.map((item)=>{
        return <h2 key={item.text}>
          <a href={item.href} target='_blank'>{item.text}</a>
        </h2>
      })
    }
  </Box>
}