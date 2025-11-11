
async function createFetch (id){
const res = await fetch ('https://dummyjson.com/products/'+id);
return await res.json()
};

const arr = [];
arr.push(createFetch(1),createFetch(2),createFetch(3))


async function race (arr) {
   const resolve = Promise.race(arr)
   return resolve
}
console.log(await race(arr))