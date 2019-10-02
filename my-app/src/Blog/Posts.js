import React from 'react';

import Post from "./Post";
//import Comment from "./Comment";

class Posts extends React.Component {

    comment = {
        title: 'Post title 01',
        date: new Date(),
        text:
            'I hope you enjoy learning React!',
        author: {
            name: 'Hello Kitty',
            avatarUrl:
                'http://placekitten.com/g/64/64',
        },
    };

    callMe() {
        console.log('callMe is called');
    }

    render() {
        return (
            <div className='postsList'>
                <Post title={this.comment.title}>
                    <img src={this.comment.author.avatarUrl} alt=""/>
                    {this.comment.author.text}
                    <h4>{this.comment.author.name}</h4>
                </Post>
                <Post title='title 02'>post 02 content goes here</Post>
            </div>


        );
    }

}

export default Posts;
