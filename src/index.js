import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { lat : null, errorMessage : ""};

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState( {lat : position.coords.latitude} );
            },
            error => {
                this.setState( {errorMessage : error.message});
            }
        );
    }
    render(){

        // window.navigator.geolocation.getCurrentPosition(
        //     position => console.log(position),
        //     error => console.log(error)
        // );
        console.log(this.state.lat);
        console.log(this.state.errorMessage);

        if(this.state.errorMessage && !this.state.lat){
            return(<div>Error: {this.state.errorMessage}</div>)
        }

        if(!this.state.errorMessage && this.state.lat){
            return(<div>Latitude: {this.state.lat}</div>)
        }

        return(<div>Loading ......</div>)
    }
}

ReactDom.render(<App/>, document.querySelector("#root"));