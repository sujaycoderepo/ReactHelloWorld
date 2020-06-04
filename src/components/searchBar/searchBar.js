import React from 'react'

class searchBar extends React.Component{

    state = {term:'Hello '};

    onInputChanged(event){
        console.log(event.target.value);
    }

    // onFormSubmit(event){
    //     console.log('Text');
    // }

    onFormSubmit = event => {
        console.log('Submit');
    }

    render(){
        return(
            <div className="ui segment">
                <form onSubmit = {this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image URL</label>
                        <input type="text" 
                        value={this.state.term}
                        onChange={(event)=> {this.setState({term : event.target.value})}}></input>
                    </div>
                    {/* 
                    ////https://github.com/Shopify/polaris-react/issues/168
                    <div className="field">
                        <label>Image URL</label>
                        <input type="text" onChange = {(event) => console.log(event.target.value)}></input>
                    </div> */}

                 </form>
            </div>
        )
    }
}

export default searchBar;