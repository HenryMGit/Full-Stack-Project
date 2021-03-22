import Statistic from './Statistic';

const Statistics = ({good,neutral,bad}) =>{
    let total = good + neutral + bad;
    let average = (good-bad)/total;
    let positive = (good/total)*100;
    
    return (
        <div>
            {good+neutral+bad !==0 ? 
                <table>
                    <tbody>
                        <tr><Statistic text="good" value={good} /></tr>
                        <tr><Statistic text="neutral" value={neutral} /></tr>
                        <tr><Statistic text="bad" value={bad} /></tr>
                        <tr><Statistic text="all" value={total} /></tr>
                        <tr><Statistic text="average" value={average} /></tr>
                        <tr><Statistic text="positive" value={positive.toString() + ' %'} /></tr>
                    </tbody>
                </table> : <div>No Feedback Given</div>}
        </div>
    );
}

export default Statistics;