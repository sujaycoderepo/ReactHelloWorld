import React from 'react'

class searchBar extends React.Component{

    state = {term:'Hello '};

    // constructor(props){
    //     super(props);
    //     this.onFormSubmit = this.onFormSubmit.bind(this);
    //     this.props.onSubmit();
    // }

    onInputChanged(event){
        console.log(event.target.value);
    }

    // onFormSubmit(event){
    //     console.log('Text');
    // }

    render(){
        return(
            <div className="ui segment">
                <form onSubmit = {(event) => {console.log('Submited')}} className="ui form">
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
                 </form>
            </div>
        )
    }
}

export default searchBar;