import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(
    Array(anecdotes.length).fill(0)
  );

  const handleNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVoteAnecdote = () => {
    const tempArr = [...votes];
    tempArr[selected]++;
    setVotes(tempArr);
  };

  function getMaxVotes(arr) {
    let maxVotes = 0;
    let maxVotesIndex = 0;
    arr.forEach((num, index) => {
        if(num > maxVotes) {
          maxVotes = num;
          maxVotesIndex = index;
        }
    })

    return [maxVotes, maxVotesIndex];
  }

  const [maxVotes, maxVotesIndex] = getMaxVotes(votes);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <button onClick={handleVoteAnecdote}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxVotesIndex]}</p>
      <p>has {maxVotes} votes</p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));