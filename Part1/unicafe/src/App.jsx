import { useState } from "react";

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <Header headerText={"give feedback"} />
            <Button text={"good"} onClick={() => setGood(good + 1)} />
            <Button text={"neutral"} onClick={() => setNeutral(neutral + 1)} />
            <Button text={"bad"} onClick={() => setBad(bad + 1)} />
            <Header headerText={"statistics"} />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    );
};

const Header = ({ headerText }) => {
    return <h1>{headerText}</h1>;
};

const Button = ({ text, onClick }) => {
    return <button onClick={onClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const average = (good - bad) / total;
    const positive = `${(good / total) * 100} %`;

    if (total === 0) {
        return <div>No feedback given</div>;
    }

    return (
        <table>
            <tbody>
                <StatisticLine text={"good"} value={good} />
                <StatisticLine text={"neutral"} value={neutral} />
                <StatisticLine text={"bad"} value={bad} />
                <StatisticLine text={"all"} value={total} />
                <StatisticLine text={"average"} value={average} />
                <StatisticLine text={"positive"} value={positive} />
            </tbody>
        </table>
    );
};

const StatisticLine = ({ text, value }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    );
};

export default App;
