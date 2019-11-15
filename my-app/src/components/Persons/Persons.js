import React from 'react';
import Person from './Person/Person';

const Persons = props => {

    return props.persons_state.map((person, index) => {
        return (
            <Person
                className={person.className}
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => props.clicked(index)}
                changed={(event) => props.changed(event, person.id)}>
                {person.content}
            </Person>
        )
    })
};

export default Persons;
