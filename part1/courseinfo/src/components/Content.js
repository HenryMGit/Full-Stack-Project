import Part from './Part';

const Content = ({part, numOfExercises}) =>{
    return(
        <div>
            <Part part={part} numOfExercises={numOfExercises}/>
            <Part part={part} numOfExercises={numOfExercises}/>
            <Part part={part} numOfExercises={numOfExercises}/>
        </div>
    );
    
    <p>{part} {numOfExercises}</p>;
}

export default Content;