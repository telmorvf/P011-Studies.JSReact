const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'teste',
        exercises: 34,
        id: 4
      }
    ]
  }

console.log(course.parts.map((part => part.name)))

//reduce
console.log([0, 1, 2, 3, 4].reduce((accum, curr) => accum + curr))   // 10


console.log(
[0, 1, 2, 3, 4].reduce(function (acumulador, valorAtual, index, array) {
    return acumulador + valorAtual;
},0));  // 10


console.log(
[0, 1, 2, 3, 4].reduce(function (acumulador, valorAtual, indice, array) {
    return acumulador + valorAtual;
}, 10));   // 20


console.log(
[
  {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }, 
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
].map((course) => course.parts));

  
