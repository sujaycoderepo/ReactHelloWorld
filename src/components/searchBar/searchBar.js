import React from 'react'

class searchBar extends React.Component{

    state = {term:'Hello '};

    onInputChanged(event){
        console.log(event.target.value);
    }

    render(){
        return(
            <div className="ui segment">
                <div className="ui form">
                    <div className="field">
                        <label>Image URL</label>
                        <input type="text" 
                        value={this.state.term}
                        onChange={(event)=> {this.setState({term : event.target.value})}}></input>
                    </div>
                    <div className="field">
                        <label>Image URL</label>
                        <input type="text" onChange = {(event) => console.log(event.target.value)}></input>
                    </div>
                 </div>
            </div>
        )
    }
}

export default searchBar;