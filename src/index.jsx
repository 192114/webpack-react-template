const asyncFunc = async () => new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('foo')
  }, 300)
})

const func = async () => {
  const result = await asyncFunc()
  console.log(result)
}

const set = new Set([1, 2, 3]);
[1, 2, 3].includes(2);

const ass = Object.assign({a:1}, {b: 2})
console.log(ass)

const isInclude = '343982147'.includes('1')

console.log(isInclude)