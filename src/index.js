import React from 'react'
import ReactDOM from 'react-dom'

const App = () =>{
    return(
        // <div className="ui comments">
        //     <div className="comment">
        //         <a href="/" className="avatar">
        //             <img alt="avatar"></img>
        //         </a>
        //         <div className="content">
        //             <a  href="/" className="author">
        //                 Test
        //             </a>
        //             <div className="metadata">
        //                 <span className="date">Today 6PM</span>
        //             </div>
        //             <div className="text">Nice one</div>
        //         </div>
        //     </div>
        // </div>
        <div class="ui comments">
            <h3 class="ui dividing header">Comments</h3>
            <div class="comment">
                <a href="/" class="avatar">
                    <img alt="avatar" src="/images/avatar/small/matt.jpg"></img>
                </a>
                <div class="content">
                    <a href="/" class="author">Matt</a>
                    <div class="metadata">
                        <span class="date">Today at 5:42PM</span>
                    </div>
                    <div class="text">
                        How artistic!
                    </div>
                    <div class="actions">
                        <a href="/" class="reply">Reply</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));