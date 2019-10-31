import React from 'react';


const FormInput = (props) => {
    return (
       <input onChange={props.changed} value={props.value}/>
    )
};

export default FormInput;