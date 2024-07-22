// Matrizes =======================================================================================
// Matrizes e Push
const t = [1, -1, 3]
t.push(5)

console.log(t.length) // 4 is printed
console.log(' ') 
console.log(t[1])     // -1 is printed
console.log(' ') 


// Matrizes Show all value wit one ForEach
t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each on its own line
})  


// Matriz e Concat -> No React é preferivel criar uma nova matriz com concat(5)
const t1 = [1, -1, 3]
const t2 = t1.concat(5)   // creates new array
console.log('t1 = ', t1)  // [1, -1, 3] is printed
console.log('t2 = ', t2)  // [1, -1, 3, 5] is printed


//Matrizes e Map -> No caso deste exemplo, o valor original é multiplicado por dois.
const m = [1, 2, 3]
console.log(m)    // [1, 2, 3] is printed
const m1 = m.map(value => value * 2)
console.log(m1)   // [2, 4, 6] is printed


//Matrizes e Map -> Para construir cadeias de caracteres
m = [1, 2, 3]
const m2 = m.map(value => '<li>' + value + '</li>')
console.log(m2)   // [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed


//Matriz variavel Rest ->
t = 0
t = [1, 2, 3, 4, 5]
const [first, second, ...rest] = t
console.log(first, second)  // 1, 2 is printed
console.log(rest)           // [3, 4, 5] is printed


// Objects ========================================================================================

const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}

const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}

console.log(object1.name)         // Arto Hellas is printed
const fieldName = 'age'
console.log(object1[fieldName])    // 35 is printed
object1.address = 'Helsinki'
object1['secret number'] = 12341

console.log(object1)


// Functions ======================================================================================

const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}
// e a função é chamada como pode ser esperado:
const result = sum(1, 5)
console.log(result)
// Se houver apenas um único parâmetro, podemos excluir os parênteses da definição:
const square = p => {
  console.log(p)
  return p * p
}
// Se a função contiver apenas uma única expressão, as chaves não serão necessárias. 
// Nesse caso, a função retorna apenas o resultado de sua única expressão.
// Agora, se removermos a impressão do console, podemos encurtar ainda mais a definição da função:
square = p => p * p
//Este formulário é particularmente útil ao manipular matrizes - por exemplo, ao usar o método de mapa:
t = [1, 2, 3]
const tSquared = t.map(p => p * p)  // tSquared is now [1, 4, 9]

// Métodos de objeto e "isso" ======================================================================================

https://fullstackopen.com/en/part1/java_script#object-methods-and-this


// Classes ======================================================================================
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log('hello, my name is ' + this.name + ' and I`m ' + this.age + ' years old.')
  }
}

const adam = new Person('Adam Ondra', 29)
adam.greet()

const janja = new Person('Janja Garnbret', 23)
janja.greet()

// MAteriais ======================================================================================

1. Guia JavaScript da Mozilla = https://developer.mozilla.org/en-US/docs/Web/JavaScript
2. Visão geral da linguagem JavaScript no site da Mozilla. = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview
3. You-Dont-Know-JS. = https://github.com/getify/You-Dont-Know-JS
4. JavaScriptInfo = https://javascript.info/
5. Eloquent JavaScript = https://eloquentjavascript.net/
6. Namaste 🙏 JavaScript = https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP
7. egghead.io = https://egghead.io/q?access_state=free