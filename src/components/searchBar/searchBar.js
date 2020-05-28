import React from 'react'

class searchBar extends React.Component{

    render(){
        return(
            <div className="ui segment">
                <div className="ui form">
                    <div className="field">
                        <label>Image URL</label>
                        <input type="text"></input>
                    </div>
                 </div>
            </div>
        )
    }
}

export default searchBar;