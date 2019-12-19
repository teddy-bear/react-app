import React, {useEffect} from 'react';
import ButtonToggle from "../Persons/ButtonToggle";
import Button from "../Bootstrap/Buttons/Button";

const section_top = (props) => {

    let btnText = 'Hide players',
        btnCLasses = 'btn btn-success',
        restoreBtnClass = 'info';

    if (props.personsVisible) {
        btnText = 'Show players';
        btnCLasses = 'btn btn-danger';
    }

    if (!props.restoreAvailable) {
        restoreBtnClass += ' disabled'
    }

    console.log('section top renders ....');

    useEffect(() => {
        console.log('visibility has changed');
    }, [props.personsVisible]);

    return (
        <div className="section-top" data-tile={props.dataTitle}>
            <div className="row">
                <div className="col-9">
                    <h1>{props.title}</h1>
                </div>
                <div className="col-3">
                    <div className="btn-group" role="group">
                        <Button cssClasses={restoreBtnClass} clicked={props.clicked}>
                            Restore persons
                        </Button>
                        <ButtonToggle className={btnCLasses} click={props.toggle_click}>
                            {btnText}
                        </ButtonToggle>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default React.memo(section_top);
