import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetails from './CommentDetails'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'

const App = () =>{
    return(
        <div>
            <ApprovalCard>
                <CommentDetails avatar={faker.image.avatar()} author="abc" CommentDate="Today 1PM" Comment="Nice blog" /> 
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails avatar={faker.image.avatar()} author="pqr" CommentDate="Today 0:30 PM" Comment="Inspiring one"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails avatar={faker.image.avatar()} author="xyz" CommentDate="Yeasterday 2PM" Comment="Nice words"/>
            </ApprovalCard>
        </div>
        
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));