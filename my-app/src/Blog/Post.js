import React from 'react';

// use class *Post extends React.Component* if [state] support is also needed, otherwise const function with only props
// support is enough
const Post = (props) => {
    return (
        <div className='postItem' onClick={props.press}>
            <h3>{props.title}</h3>
            <div className='inner'>
                {props.children}
            </div>
        </div>
    )
};

export default Post;
