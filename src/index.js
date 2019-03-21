import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

// PROP PASSED IN VIA PROPS IN 'ReactDOM.render' AT BOTTOM OF CODE
// IT IS PASSED AS THE PROP: "tweet={testTweet}"
function Tweet( {tweet} ) {
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar}/>
            <div className="content">
                <NameWithHandle author={tweet.author}/> <Time time={tweet.timestamp}/>
                <Message text={tweet.message} />
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton retweetCount={tweet.retweets}/>
                    <LikeButton likeCount={tweet.likes} />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    )
}
Tweet.propTypes = {
    tweet: PropTypes.object
}

// Test Tweet Fake Data
var testTweet = [
    {
        id: 1,
        message: "Savannah Bear is the cutest dog ever!!!",
        gravatar: "123",
        author: {
            handle: "dogperson",
            name: "IAMA Dog Person"
        },
        likes: 5,
        retweets: 2,
        timestamp: "3 days ago"
    },
    {
        id: 2,
        message: "Savannah Bear is my favorite!!!",
        gravatar: "123",
        author: {
            handle: "amandog",
            name: "Am a Dog Person"
        },
        likes: 4,
        retweets: 6,
        timestamp: "1 day ago"
    },
];

// OLD WORKING TEST TWEET FAKE DATA
// var testTweet = {
//     message: "Savannah Bear is the cutest dog ever!!!",
//     gravatar: "123",
//     author: {
//         handle: "dogperson",
//         name: "IAMA Dog Person"
//     },
//     likes: 5,
//     retweets: 2,
//     timestamp: "3 days ago"
// };

function Avatar(props) {
    var url = `https://www.gravatar.com/avatar/${props.hash}`;
    return (
        <img
            src={url}
            className="avatar"
            alt="avatar" />
    )
}
Avatar.propTypes = {
    hash: PropTypes.string
}

function Message(props) {
    return (
        <div className="message">
            {props.text}
        </div>
    )
}
Message.propTypes = {
    message: PropTypes.string
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
NameWithHandle.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired
    }).isRequired
};

// ONE WAY TO GET RETWEET COUNT
// THE "RetweetButton" FUNCTION BELOW CALLS THIS FUNCTION
// function getRetweetCount(retweetCount) {
//     if(retweetCount > 0) {
//         return (
//             <span className="retweet-count">
//                 {retweetCount}
//             </span>
//         );
//     } else {
//         return null;
//     }
// }

const Time = (props) => (
    <span className="time">{props.time}</span>
)
Time.propTypes = {
    time: PropTypes.string
};

const ReplyButton = () => (
    <i className="fa fa-reply reply-button" />
);

// OLD RETWEET BUTTON
// const RetweetButton = ({retweetCount}) => (
//     <span className="retweet-button">
//         <i className="fa fa-retweet" />
//         {getRetweetCount(retweetCount)}
//     </span>
// );

// NEW RETWEET BUTTON TO INCLUDE COUNT LOGIC
const RetweetButton = ({retweetCount}) => {
    return (
        <span className="retweet-button">
            <i className="fa fa-retweet"/>
            <span className="retweet-count">
                {retweetCount ? retweetCount : null}
            </span>
        </span>
    )
}
RetweetButton.propTypes = {
    retweetCount: PropTypes.number
}

// OLD LIKE BUTTON - USING '&&' OPERATOR THAT I DON'T CARE FOR
// const LikeButton = ({likeCount}) => (
//     <span className="like-button">
//         <i className="fa fa-heart" />
//         {likeCount > 0 &&
//             <span className="like-count">
//                 {likeCount}
//             </span>
//         }
//     </span>
// );

// NEW LIKE BUTTON USING TERNARY (?) OPERATOR
const LikeButton = ({likeCount}) => {
    return (
        <span className="like-button">
            <i className="fa fa-heart"/>
            <span className="like-count">
                {likeCount ? likeCount : null}
            </span>
        </span>
    )
}
LikeButton.propTypes = {
    likeCount: PropTypes.number
}

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button" />
);

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector('#root'));