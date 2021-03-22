import React, {useState} from 'react';
import Statistics from './components/Statistics';
import Button from './components/Button';

function App() {
  //saving clicks to its own states
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good+1);
  const increaseNeutral = () => setNeutral(neutral+1);
  const increaseBad = () => setBad(bad+1);

  return (
    <>
      <div>
        <h1>Give Feedback</h1>
        <Button text="good" handleClick={increaseGood}/>
        <Button text="neutral" handleClick={increaseNeutral}/>
        <Button text="bad" handleClick={increaseBad}/>
      </div>
      <div>
        <h1>Statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </>
  );
}

export default App;
