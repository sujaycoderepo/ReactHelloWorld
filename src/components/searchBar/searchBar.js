import React from 'react'

class searchBar extends React.Component{

    onInputChanged(event){
        console.log(event.target.value);
    }

    render(){
        return(
            <div className="ui segment">
                <div className="ui form">
                    <div className="field">
                        <label>Image URL</label>
                        <input type="text" onChange={this.onInputChanged}></input>
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