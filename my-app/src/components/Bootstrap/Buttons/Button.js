import React from 'react';

const button = (props) => {

    let cssClasses = props.cssClasses ? 'btn btn-' + props.cssClasses : 'btn btn-primary';

    console.log(this + 'button renders ....');
    return (
        <button className={cssClasses} onClick={props.clicked}>
            {props.children}
        </button>
    )
};

export default button;
