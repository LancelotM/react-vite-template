// 注意：你进行数据获取的方式取决于
// 你与 Suspense 集成的框架。
// 通常，缓存逻辑会在框架内部。

export let cache:Map<string,Promise<String>> = new Map();


export function fetchData(key: string) {
  if (!cache.has(key)) {
    cache.set(key, getData());
  }
  return cache.get(key) || Promise.resolve('init');
}

export async function getData() {
  return await getAlbums();
}

async function getAlbums() {
  // 添加一个假的延迟，以便让等待更加明显。
  await new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
  console.log('2s之后');
  return 'success get data';
}
