import React from 'react';
import ButtonToggle from "../Persons/ButtonToggle";

const section_top = (props) => {

    let btnText = 'Hide players',
        btnCLasses = 'btn btn-success';
    if (props.personsVisible) {
        btnText = 'Show players';
        btnCLasses = 'btn btn-danger';
    }
    console.log('section top renders ....');
    return (
        <div className="section-top">
            <div className="row">
                <div className="col-9">
                    <h1>{props.title}</h1>
                </div>
                <div className="col-3">
                    <div className="btn-group" role="group">
                        <button className="btn btn-info" onClick={props.clicked}>
                            {props.btn_text}
                        </button>
                        <ButtonToggle className={btnCLasses} click={props.toggle_click}>
                            {btnText}
                        </ButtonToggle>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default section_top;
