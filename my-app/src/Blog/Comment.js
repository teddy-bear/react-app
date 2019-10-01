// todo: import this component into Posts.js
import React from "react";

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

class Comment extends React.Component {


    formatDate(date) {
        return date.toLocaleDateString();
    }

    Comment(props) {
        return (
            <div className="Comment">
                {props.children}
                <UserInfo user={props.author}/>
                <div className="Comment-text">
                    {props.text}
                </div>
                <div className="Comment-date">
                    {this.formatDate(props.date)}
                </div>
            </div>
        );
    }
}


export default Comment;
/*

<Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
>
    <p><em>children info is rendered here</em></p>
</Comment>*/
