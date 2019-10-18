import React from 'react';


const person = (props) => {
    return (
        <div onClick={props.press_me}>
            <p>{props.name} = {props.age} years old <em>{props.extra}</em></p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;