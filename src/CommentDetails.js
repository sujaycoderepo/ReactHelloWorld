import React from 'react'
import faker from 'faker'

const CommentDetails = () => {
    return(
        <div className="comment">
                 <a href="/" className="avatar">
                     <img alt="avatar" src={faker.image.avatar()} ></img>
                 </a>
                 <div className="content">
                     <a  href="/" className="author">
                         Test
                     </a>
                     <div className="metadata">
                         <span className="date">Today 6PM</span>
                     </div>
                     <div className="text">Nice one</div>
                 </div>
             </div>
    );
};

export default CommentDetails;