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

// ONE WAY TO GET RETWEET COUNT
// "RetweetButton" FUNCTION BELOW CALLS THIS FUNCTION
// function getRetweetCount(count) {
//     if(count > 0) {
//         return (
//             <span className="retweet-count">
//                 {count}
//             </span>
//         );
//     } else {
//         return null;
//     }
// }

const Time = (props) => (
    <span className="time">{props.time}</span>
);

const ReplyButton = () => (
    <i className="fa fa-reply reply-button" />
);

// OLD RETWEET BUTTON
// const RetweetButton = ({ count }) => (
//     <span className="retweet-button">
//         <i className="fa fa-retweet" />
//         {getRetweetCount(count)}
//     </span>
// );

// NEW RETWEET BUTTON TO INCLUDE COUNT LOGIC
const RetweetButton = ({count}) => {
    return (
        <span className="retweet-button">
            <i className="fa fa-retweet"/>
            <span className="retweet-count">
                {count ? count : null}
            </span>
        </span>
    )
}

// OLD LIKE BUTTON - USING '&&' OPERATOR THAT I DON'T CARE FOR
// const LikeButton = ({ count }) => (
//     <span className="like-button">
//         <i className="fa fa-heart" />
//         {count > 0 &&
//             <span className="like-count">
//                 {count}
//             </span>
//         }
//     </span>
// );


// NEW LIKE BUTTON USING TERNARY (?) OPERATOR
const LikeButton = ({count}) => {
    return (
        <span className="like-button">
            <i className="fa fa-heart"/>
            <span className="like-count">
                {count ? count : null}
            </span>
        </span>
    )
}

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button" />
);

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector('#root'));