import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

function App() {
  const course = 'Half Stack applicaiton development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 =  14;

  return (
    <div>
      <Header course={course}/>
      <Content/>
      <Content part={part1} numOfExercises={exercises1} />
      <Content part={part2} numOfExercises={exercises2} />
      <Content part={part3} numOfExercises={exercises3} />
      <Total totalExercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
}

export default App;
