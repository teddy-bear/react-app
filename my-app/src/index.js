import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import Clock from './components/Clock/Clock';
import Posts from './components/Blog/Posts';
import App from './containers/App';

// todo: what for this is?
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props) {
    return (
        <img
            className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
                {props.children}
            </div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <Posts/>
            {props.children}
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text:
        'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl:
            'http://placekitten.com/g/64/64',
    },
};
ReactDOM.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
    >
    <p>children info is rendered here</p></Comment>,
    document.getElementById('root')
);

ReactDOM.render(
    <Clock/>,
    document.getElementById('clock')
);

ReactDOM.render(
    <App title={'Our players'}/>,
    document.getElementById('app')
);
