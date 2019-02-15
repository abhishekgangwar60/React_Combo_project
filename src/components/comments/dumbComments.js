import React from 'react';
import faker from 'faker';

const style = {
    commentContainer: {
        display: 'flex',
        flexDirection: 'column'
    }
}

export const CommentSection = () => {
    return (
        <div className="ui comments" style={style.commentContainer}>
            <h3 className="ui dividing header">Comments</h3>
            <div className="comment" >
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href="/" className="author">Matt</a>
                    <div className="metadata">
                        <span className="date">Today at 5:42PM</span>
                    </div>
                    <div className="text">
                        How artistic!
                    </div>
                    <div className="actions">
                        <a href="/" className="reply">Reply</a>
                    </div>
                </div>
            </div>
        </div>
    )
}