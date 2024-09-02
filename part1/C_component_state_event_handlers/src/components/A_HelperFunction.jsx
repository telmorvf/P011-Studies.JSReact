const Hello = ({ name, age }) => {

  const bornYear = () => {
    return new Date().getFullYear() - age
  }

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old =
        So you were probably born in {bornYear()}
      </p>
    </div>
  )
}

const A_HelperFunction = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <hr />
      <h2>= A_HelperFunction =</h2>
      <h3>Greetings</h3>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default A_HelperFunction