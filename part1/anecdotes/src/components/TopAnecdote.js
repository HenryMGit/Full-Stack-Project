import React from 'react';

const TopAnecdote = ({anecdotes, votes}) =>{
    const mostVotes = () =>{
        let max = Math.max(...votes);
        const indexes = [];
        votes.forEach((item, index) => item === max ? indexes.push(index):null);
        if(indexes.length === 1){
            return indexes[0];
        }
        return  indexes[Math.floor(Math.random() * indexes.length)];
    }

    const maxIndex = mostVotes();
    return(
        <div>
            <h1>Anecdote with most votes</h1>
            <div>{anecdotes[maxIndex]}</div>
            <div>has {votes[maxIndex]} votes </div>
        </div>
    )
}

export default TopAnecdote;