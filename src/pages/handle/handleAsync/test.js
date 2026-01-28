import {asyncToGenerator, run} from './method.js'

function* gen() {
  const a = yield Promise.resolve(1);
  const b = yield Promise.resolve(a + 1);
  const c = yield b + 1;
  return c + 1;
}

run(gen).then(res => {
  console.log(res); // 4
});

// g.then((result) => {
//   console.log(res); // 3
// })

// async function fn() {
//   const a = await Promise.resolve(1);
//   const b = await Promise.resolve(a + 1);
//   return b + 1;
// }

// fn().then((res)=>{
//   console.log(res); // 3
// })

const handleAsync = asyncToGenerator(gen)
console.log(handleAsync);
handleAsync().then((res)=>{
  console.log(res); // 3
})