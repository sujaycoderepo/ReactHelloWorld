import React from 'react'
import ReactDom from 'react-dom'
import SeasonDisply from './seasonDisplay'
import Spinner from './spinner'

class App extends React.Component{
    
    //// CODE REFACTORING !!!!! 
    //// Remove constructor and replace with apropreate structure 
    // constructor(props){
    //     super(props);
    //     this.state = { lat : null, errorMessage : ""};

    //     window.navigator.geolocation.getCurrentPosition(
    //         position => {
    //             this.setState( {lat : position.coords.latitude} );
    //         },
    //         error => {
    //             this.setState( {errorMessage : error.message});
    //         }
    //     );
    // }

    //// No need to write it in constructor. 
    //// Babel.js internally converts it to required form like constructor 
    state = {lat : null, errorMessage : ""};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat : position.coords.latitude}),
            error => this.setState({errorMessage : error.message})
        )
    }
    
    render(){

        // window.navigator.geolocation.getCurrentPosition(
        //     position => console.log(position),
        //     error => console.log(error)
        // );
        console.log(this.state.lat);
        console.log(this.state.errorMessage);

        if(this.state.errorMessage && !this.state.lat){
            return(<div>Error: {this.state.errorMessage}</div>);
        }

        if(!this.state.errorMessage && this.state.lat){
            return(<SeasonDisply lat = {this.state.lat}/>);
        }

        return(<Spinner message="Please accept loaction request."/>);
    }
}

ReactDom.render(<App/>, document.querySelector("#root"));