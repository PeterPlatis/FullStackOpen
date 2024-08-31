const Course = ({ course }) => {
    return (
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    );
};

const Header = ({ course }) => {
    return <h2>{course}</h2>;
};

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part) => {
                return (
                    <Part
                        key={part.id}
                        part={part.name}
                        exercises={part.exercises}
                    />
                );
            })}
        </div>
    );
};

const Part = (props) => {
    return (
        <div>
            <p>
                {props.part} {props.exercises}
            </p>
        </div>
    );
};

const Total = ({ parts }) => {
    const total = parts.reduce((acc, add) => {
        return acc + add.exercises;
    }, 0);
    return <strong>Total of {total} exercises</strong>;
};

export default Course;
