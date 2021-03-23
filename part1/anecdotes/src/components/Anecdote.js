import React from 'react';

const Anecdote = ({anecdotes, selected, votes}) =>{
    return(
        <div>
            <h1>Anecdote of the day</h1>
            <div>{anecdotes[selected % anecdotes.length]}</div>
            <div>has {votes[selected % anecdotes.length]} votes</div>
        </div>
    )
}

export default Anecdote;