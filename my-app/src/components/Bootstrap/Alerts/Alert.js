import React from 'react';

function alert(props) {

    let cssClasses = props.cssClasses ? 'alert alert-' + props.cssClasses : 'alert alert-primary';

    console.log(this + 'alert renders ....');
    return (
        <div className={cssClasses} role="alert">
            {props.children}
        </div>
    )
};

export default alert;
