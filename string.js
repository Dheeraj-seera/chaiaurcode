const name = "DHeeraj"
const age = 22
console.log(name + " " + age)
console.log(`Hello my name is ${name} and my age is ${age}`)
// string interpolation we can directly inject the variable
const gameName = new String('dheeraj seera')
console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf('r'))
const newString = gameName.substring(2,4)
console.log(newString)
const another = gameName.slice(-5,9)
console.log(another)

const string ="              dheeraj          "
console.log(string)
console.log(string.trim())
const url = "https://www.w3schools.com/"
console.log(url.replace('3','-'))
console.log(url.includes('hello'))
console.log(gameName.split('--'))
