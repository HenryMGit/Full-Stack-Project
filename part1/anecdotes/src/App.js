import React, {useState} from 'react';
import Anecdote from './components/Anecdote';
import Button from './components/Button';
import TopAnecdote from './components/TopAnecdote';

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected,setSelected] = useState(0);
  const [votes, setVotes] = useState( new Array(anecdotes.length+1).join('0').split('').map(parseFloat));

  const next = () =>{
    setSelected(selected+1);
  }

  const addVote = () =>{
    const newVotes = [...votes];
    newVotes[selected % anecdotes.length] += 1;
    setVotes(newVotes);
  }
  

  return (
    <div>
      <Anecdote anecdotes={anecdotes} selected={selected} votes={votes} />
      <Button text='vote' handleClick={addVote} /> 
      <Button text='next anecdote' handleClick={next} />
      <TopAnecdote anecdotes={anecdotes} selected={selected} votes={votes} />
    </div>
  );
}

export default App;
