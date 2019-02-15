import React from 'react';
import faker from 'faker';


export const SmartComment = (props) => {
    return (
        <div className="ui comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href="/" className="author">{props.personName}</a>
                    <div className="metadata">
                        <span className="date">{props.commentText}</span>
                    </div>
                    <div className="text">
                        {props.Time}
                    </div>
                    <div className="actions">
                        <a href="/" className="reply">Reply</a>
                    </div>
                </div>
            </div>
        </div>
    );
}