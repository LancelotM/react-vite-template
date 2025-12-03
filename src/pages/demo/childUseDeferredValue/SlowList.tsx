import { memo } from 'react';
import './index.css'

type SlowListType = SlowItemType & {

}

const SlowList = memo(function SlowList({ text }:SlowListType) {
  // 仅打印一次。实际的减速是在 SlowItem 组件内部。
  console.log('[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />');

  let items = [];
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }
  return (
    <ul className="items">
      {items}
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
