// Import React and React-DOM 
import React from 'react'
import ReactDOM from 'react-dom'

// Create react component 
const App = () =>{
    const bottonText = "Click Me";
    return(
        <div>
            <label className="lable" htmlFor="name">Enter Name:</label>
            <input id="name" type="text"/>
            <button style = {{backgroundColor:'blue', color:'white'}}> {bottonText}</button>
        </div>
    );
}

// Tack react component and shoe it on ths screen
ReactDOM.render(<App/>,document.querySelector('#root'));