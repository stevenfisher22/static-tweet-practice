import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet( {tweet} ) {
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar}/>
            <div className="content">
                <NameWithHandle author={tweet.author}/> <Time time={tweet.timestamp}/>
                <Message text={tweet.message} />
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton count={tweet.retweets}/>
                    <LikeButton count={tweet.likes} />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    )
}

// Test Tweet Fake Data
var testTweet = {
    message: "Something about dogs.",
    gravatar: "123",
    author: {
        handle: "dogperson",
        name: "IAMA Dog Person"
    },
    likes: 5,
    retweets: 2,
    timestamp: "3 days ago"
};

function Avatar(props) {
    var url = `https://www.gravatar.com/avatar/${props.hash}`;
    return (
        <img
            src={url}
            className="avatar"
            alt="avatar" />
    )
}

function Message(props) {
    return (
        <div className="message">
            {props.text}
        </div>
    )
}

function NameWithHandle( {author} ) {
    const { name, handle } = author;
    return (
        <span className="name-with-handle">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    )
}

function getRetweetCount(count) {
    if(count > 0) {
        return (
            <span className="retweet-count">
                {count}
            </span>
        );
    } else {
        return null;
    }
}

const Time = (props) => (
    <span className="time">{props.time}</span>
);

const ReplyButton = () => (
    <i className="fa fa-reply reply-button" />
);

const RetweetButton = ({ count }) => (
    <span>
        <i className="fa fa-retweet retweet-button" />
        {getRetweetCount(count)}
    </span>
);

const LikeButton = ({ count }) => (
    <span>
        <i className="fa fa-heart like-button" />
        {count > 0 &&
            <span className="like-count">
                {count}
            </span>
        }
    </span>
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button" />
);

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector('#root'));