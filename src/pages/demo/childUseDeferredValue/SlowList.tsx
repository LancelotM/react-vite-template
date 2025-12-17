import { memo, useCallback, useEffect, useState } from 'react';
import './index.css'
import { Box } from '@radix-ui/themes';

type SlowListType = SlowItemType & {

}

let allItems: any[] = [];
// let loaded = false;
const SlowList = memo(function SlowList({ text }:SlowListType) {
  // render一次。实际的减速是在 SlowItem 组件内部。
  const [isRender,setIsRender] = useState<boolean>(false)
  console.log('[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />',allItems.length);
  console.log('[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />-isRender',isRender);

  const addItems = useCallback(()=>{
    // loaded = true;
    const _items = []
    for (let i = 0; i < (allItems.length + 100); i++) {
      _items.push(<SlowItem key={i} text={text} />);
    }
    allItems = _items;
    setIsRender(!isRender)
  },[text,isRender])

  useEffect(()=>{
    const observer = new IntersectionObserver((entries, observer) => {
      console.log('entries',entries);
      console.log('observer',observer);
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('元素进入视口', entry.target);
          addItems()
        }
      });
    },{
      // rootMargin: '-100px 0px', // 视口扩展/收缩
      // threshold: 0.3  // 元素可见面积达到 30% 才触发
    });

    const loadMoreDom = document.getElementById('loadMore');
    console.log('开始 loadMoreDom 监听');
    loadMoreDom && observer.observe(loadMoreDom);

    return ()=>{
      console.log('注销 loadMoreDom 监听');
      loadMoreDom && observer.unobserve(loadMoreDom);
    }
  },[addItems])

  let items = [];
  for (let i = 0; i < (allItems.length == 0 ? 300: allItems.length); i++) {
    items.push(<SlowItem key={i} text={text} />);
  }

  return (
    <ul className="items">
      {items}
      {items.length > 0 && <Box id="loadMore">加载更多...</Box>}
    </ul>
  );
});

type SlowItemType = {
  text:String
}

function SlowItem({ text }:SlowItemType) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // 每个 item 暂停 1ms，模拟极其缓慢的代码
  }

  return (
    <li className="item">
      Text: {text}
    </li>
  )
}

export default SlowList;
