import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetails from './CommentDetails'
import faker from 'faker'

const App = () =>{
    return(
         <div className="ui comments">
            <CommentDetails avatar={faker.image.avatar()} author="abc" CommentDate="Today 1PM" Comment="Nice blog" />

            <CommentDetails avatar={faker.image.avatar()} author="pqr" CommentDate="Today 0:30 PM" Comment="Inspiring one"/>

            <CommentDetails avatar={faker.image.avatar()} author="xyz" CommentDate="Yeasterday 2PM" Comment="Nice words"/>
         </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));