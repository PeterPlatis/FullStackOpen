import { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [filteredPersons, setFilteredPersons] = useState(persons);

    const hook = () => {
        axios.get("http://localhost:3001/persons").then((response) => {
            const personList = response.data;
            setPersons(personList);
            setFilteredPersons(personList)
        });
    };

    useEffect(hook, []);

    const handleNewNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleNewNumberChange = (event) => {
        setNewNumber(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilteredPersons(
            persons.filter((person) =>
                person.name
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase())
            )
        );
    };

    const addPerson = (event) => {
        event.preventDefault();

        if (persons.some((person) => newName === person.name)) {
            alert(`${newName} is already added to phonebook`);
        } else {
            const nameObject = {
                name: newName,
                number: newNumber,
                id: persons.length + 1,
            };
            const newPersons = persons.concat(nameObject);
            setPersons(newPersons);
            setFilteredPersons(newPersons);
            setNewName("");
            setNewNumber("");
        }
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter handleFilterChange={handleFilterChange} />
            <h2>add a new</h2>
            <PersonForm
                handleNewNameChange={handleNewNameChange}
                handleNewNumberChange={handleNewNumberChange}
                addPerson={addPerson}
                newName={newName}
                newNumber={newNumber}
            />
            <h2>Numbers</h2>
            <Persons filteredPersons={filteredPersons} />
        </div>
    );
};

export default App;
