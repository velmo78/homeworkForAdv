
const arr = [
{ id: 1, name: "Вася" },
{ id: 2, name: "Петя" },
{ id: 1, name: "Вася"},
{ id: 3, name: "Гена"},
{ id: 1, name: "Дрон"},
];
const finalArray = [];
const set = new Set();

for (let el of arr){
    if (!set.has(el.id)){
        set.add(el.id)
        finalArray.push(el)
    }
}
console.log (set)
console.log (finalArray)