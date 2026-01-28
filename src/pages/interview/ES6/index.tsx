import { Box } from "@radix-ui/themes"

export default ()=> {
  const ES6Arr = [
    {
      href:'https://github.com/febobo/web-interview/issues/34',
      text:'说说var、let、const之间的区别',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/41',
      text:'Generator',
    },
    {
      href:'https://github.com/febobo/web-interview/issues/42',
      text:'Proxy',
    },
  ]
  return <Box>
    {
      ES6Arr.map((item)=>{
        return <h2 key={item.text}>
          <a href={item.href} target='_blank'>{item.text}</a>
        </h2>
      })
    }
  </Box>
}