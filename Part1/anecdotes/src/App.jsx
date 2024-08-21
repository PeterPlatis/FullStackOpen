import { useState } from "react";

const App = () => {
    const anecdotes = [
        "If it hurts, do it more often.",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
        "The only way to go fast, is to go well.",
    ];

    const [selected, setSelected] = useState(0);
    const [points, setPoints] = useState(
        anecdotes.reduce((accumulator, _, index) => {
            accumulator[index] = 0;
            return accumulator;
        }, {})
    );

    const handleNextAnecdote = () => () => {
        setSelected(Math.floor(Math.random() * anecdotes.length));
    };

    const handleVote = () => () => {
        setPoints({ ...points, [selected]: points[selected] + 1 });
    };

    const maxVotes = Object.keys(points).reduce((a, b) =>
        points[a] > points[b] ? a : b
    );

    return (
        <div>
            <Header text={"Anecdote of the day"} />
            <Anecdote anecdote={anecdotes[selected]} />
            <VoteCounter votes={points[selected]} />
            <Button onClick={handleVote()} text={"vote"} />
            <Button onClick={handleNextAnecdote()} text={"next anecdote"} />
            <Header text={"Anecdote with most votes"} />
            <Anecdote anecdote={anecdotes[maxVotes]} />
        </div>
    );
};

const Header = ({ text }) => {
    return (
        <div>
            <h1>{text}</h1>
        </div>
    );
};

const Anecdote = ({ anecdote }) => {
    return <div>{anecdote}</div>;
};

const Button = ({ onClick, text }) => {
    return <button onClick={onClick}>{text}</button>;
};

const VoteCounter = ({ votes }) => {
    return (
        <div>
            <p>has {votes} votes</p>
        </div>
    );
};

export default App;
