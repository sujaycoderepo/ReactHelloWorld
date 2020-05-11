import React from 'react'
import ReactDOM from 'react-dom'

const App = () =>{
    return(
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar"></img>
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
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));