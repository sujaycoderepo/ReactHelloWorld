import React from 'react';
import SearchBar from './searchBar/searchBar'

class App extends React.Component{
    
    onSearchSubmit(term){
        console.log('App -> onSearchSubmit');
        console.log(term);
    }

    render(){
        return(
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>    
            </div>
        );
    }
} 

export default App;