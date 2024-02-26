const array = [1,2,3,4,5]

const arr = array.slice(1,3)
const arr2 = array.splice(1,3)
console.log(arr)
console.log(arr2)



const array1 = ["one", "two", "spiderman"]
const array2 = ["superman", "flash", "batman"]

const arr3 = array1.concat(array2)
console.log(arr3)
const spred = [...array1, ...array2]
console.log(spred)

const first = [1,2,3,45,5]
const newfirst = first
console.log(newfirst)
