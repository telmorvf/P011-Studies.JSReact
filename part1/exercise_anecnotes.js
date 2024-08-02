import { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]

const myArray = new Array(anecdotes.length).fill(0)

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
 
const App = () => {

  const [selected, setSelected] = useState(0)
  const [myArra, setVoted] = useState(new Array(anecdotes.length).fill(0));

  const getMax = () => {
    let maxItem = 0;
    let maxIndex = 0;
    myArray.forEach((item, index) => {
        if (item > maxItem){
          maxItem = item;
          maxIndex = index;
        }
      });
    return maxIndex;
  }

  const handleRandomIntClick = () => {
    setSelected(getRandomInt(anecdotes.length))
  }
  const handleVotedClick = () => {
    //setVoted((myArray[selected]) += 1)
    const tempVote = ((myArray[selected]) += 1)
    setVoted(tempVote)
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{selected + ". " + anecdotes[selected]}</p>
      <p>has {myArray[selected]} votes</p>

      <Button handleClick={handleVotedClick} text="vote" />
      {console.log(myArray)}
      <Button handleClick={handleRandomIntClick} text="next anecdote"/>
      {console.log(selected)}
      
      <h1>Anecdote with most votes</h1>
      <p>{getMax() + ". " + anecdotes[getMax()]}</p>
      <p>has {myArray[getMax()]} votes</p>
    </div>
  )
}

export default App