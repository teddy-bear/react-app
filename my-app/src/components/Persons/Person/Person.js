import React from 'react';

import './Person.css';
import PropTypes from "prop-types";

const Person = (props) => {
    return (
        <div className={props.className}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.name} {props.age}</h5>
                    <p className="card-text">{props.children}</p>
                    <div className="form-group">
                        <label htmlFor="name">Update name</label>
                        <input type="text" onChange={props.changed} className="form-control" id="name"
                               placeholder={props.name}/>
                    </div>
                    <div onClick={props.click} className="btn btn-primary">remove item</div>
                </div>
            </div>
        </div>

    )
};

// Fields types validation
Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    children: PropTypes.node,
    changed: PropTypes.func,
    click: PropTypes.func,
    className: PropTypes.string,
};

Person.defaultProps = {
    children: 'default card content',
};

export default Person;
