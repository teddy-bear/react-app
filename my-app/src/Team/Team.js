// no need to import whole react if using functional component const Team (not class Teams extends React Component)
import React, {useState} from 'react';

import Person from "./Person";
import ButtonToggle from "../Misc/ButtonToggle";

const Team = (props) => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 26}
        ]
    });

    const [otherState, setOtherState] = useState('some other value');

    //console.log(personsState, otherState);

    const switchNameHandler = () => {
        console.log(this);
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        setPersonsState({
            persons: [
                {name: 'Simone', age: 28, extra: 'extra value for single item only'},
                {name: 'Peter', age: 29},
                {name: 'Ann', age: 27}
            ]
        });
    };

    return (
        <div className="team-members">
            <h1>Our team</h1>
            <p>static description</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person
                press_me={switchNameHandler}
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}
                extra={personsState.persons[0].extra}
            />
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}
            >
                My Hobbies: Racing
            </Person>
            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}
            />
            <ButtonToggle/>
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
};


export default Team;
