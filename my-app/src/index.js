import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import App2 from './App2';
import registerServiceWorker from './registerServiceWorker';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);

//ReactDOM.render(<App/>, document.getElementById('root'));
//ReactDOM.render(<App2/>, document.getElementById('root2'));
registerServiceWorker();
