import React from 'react';


const person = (props) => {
    return (
        <div>
            <p>{props.name} = {props.age} years old <em>{props.tt}</em></p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;