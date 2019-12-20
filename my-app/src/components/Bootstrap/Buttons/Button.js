import React from 'react';

const Button = (props) => {

    let cssClasses = props.cssClasses ? 'btn btn-' + props.cssClasses : 'btn btn-primary';

    return (
        <button className={cssClasses} onClick={props.clicked}>
            {props.children}
        </button>
    )
};

export default Button;
