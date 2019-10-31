import React from 'react';


const ButtonToggle = (props) => {
    return (
        <button className={props.className} onClick={props.click}>
            {props.children}
        </button>
    )
};

export default ButtonToggle;
