import React from 'react';


const person_removed = (props) => {
    return (
        <div className="alert alert-warning" role="alert">
            {props.children}
        </div>
    )
};

export default person_removed;
