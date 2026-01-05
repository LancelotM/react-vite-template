import Nav from "@/components/Nav"
import { Box, Button, TextArea, Text } from "@radix-ui/themes"
import axios, {  type AxiosResponse } from "axios"
import { Suspense, useCallback, useEffect, useLayoutEffect, useState, useTransition } from "react"
import './index.less'
import Loading from "@/components/Loading"

export default () => {
  const [answer,setAnswer] = useState('');
  const [isPending,startTransition] = useTransition()

  useEffect(()=>{
    console.log(`${new URL(import.meta.url).pathname}-useEffect`)
    console.log('import.meta.env',import.meta.env);
  },[])

  useLayoutEffect(()=>{
    console.log(`${new URL(import.meta.url).pathname}-useLayoutEffect`)
  },[])

  const submit = useCallback(async (e:any)=>{
    e.preventDefault(); // 阻止默认提交
    setAnswer('');
    const inputQuestion = e.target.inputQuestion.value;
    console.log('inputQuestion',inputQuestion);
    if(!inputQuestion) return;
    try {
      const response: AxiosResponse = await axios.post('/api/chat',{
        model:'@cf/meta/llama-3.1-8b-instruct',
        messages: [
          { role: 'system', content: '你是一个友好的 AI 助手' },
          { role: 'user', content: inputQuestion }
        ],
      })
      const {
        data
      } = response
      console.log('response',response);
      setAnswer(data.choices[0].message.content);
    } catch (error: any) {
      console.log('response-error',error);
      setAnswer(error.message);
    }
  },[])

  return <Box className="ai">
    <Nav/>
    <Box width={'400px'}>
      <form onSubmit={(e)=>{
        startTransition(async () => {
          await submit(e)
        });
      }}>
        <TextArea placeholder="Reply to comment…" name="inputQuestion" />
        <Button type='submit' size="2" variant="soft">
          提问ai
        </Button>
      </form>
    </Box>
    <Box>
      {
        isPending?
          <h2>ai:<Loading/></h2>:
          <>
            {answer && <h2>ai:</h2>}
            <Text className="aiReply" wrap='pretty'>{answer}</Text>
          </>
      }
    </Box>
  </Box>
}