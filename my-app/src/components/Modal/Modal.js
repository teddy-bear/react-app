import React, {useEffect, useRef, Fragment} from 'react';
import Button from "../Bootstrap/Buttons/Button";

const ModalPopup = (props) => {
    let modal_footer = '',
        refContainer = useRef(null),
        btn_primary = '',
        btn_secondary = '';

    if (props.btn_primary) {
        btn_primary =
            <Button cssClasses='primary'>
                {props.btn_primary}
            </Button>
    }
    if (props.btn_secondary) {
        btn_secondary =
            <Button cssClasses='secondary'>
                {props.btn_secondary}
            </Button>
    }

    if (btn_primary || btn_secondary) {
        modal_footer =
            <div className="modal-footer">
                {btn_primary}
                {btn_secondary}
            </div>;
    }

    useEffect(() => {
        // execs after all the data is rendered
        console.log(refContainer.current);
    });

    return (
        <Fragment>
            <button type="button" className="btn btn-primary" data-toggle="modal"
                    data-target=".modal">Small modal
            </button>
            <div className="modal" tabIndex="-1" role="dialog" ref={refContainer}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>{props.children}</p>
                        </div>
                        {modal_footer}
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default ModalPopup;
