import React from 'react'

const CommentDetails = (props) => {
    return(
        <div className="comment">
                 <a href="/" className="avatar">
                     <img alt="avatar" src={props.avatar} ></img>
                 </a>
                 <div className="content">
                     <a  href="/" className="author">
                         {props.author}
                     </a>
                     <div className="metadata">
                        <span className="date">{props.CommentDate}</span>
                     </div>
                     <div className="text">{props.Comment}</div>
                 </div>
             </div>
    );
};

export default CommentDetails;