import './seasonDisplay.css';
import React from 'react';

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summar' : 'winter';
    }
    else
    {
        return lat < 0 ? 'winter' : 'summar';
    }
}

//// CODE REFACTORING by using JS Object 
// const getMessage = (season) => {
//     return season === 'winter' ? 'Its Cold !!!!' : 'Its too Hot !!!! ';
// }

// const getIcon = (season) =>{
//     return season === 'winter' ? 'snowflake' : 'sun';
// }

//// JS Object 
const seasonConfig = {
    summar : {
        message : 'Its Too Hot !!!!',
        iconName : 'sun'
    },
    winter : {
        message : 'Its Cold !!!!',
        iconName: 'snowflake'
    }
}


const seasonDisplay = (props) =>{

    const season = getSeason(props.lat, new Date().getMonth());
    const {message, iconName}  = seasonConfig[season]
    console.log(iconName);
    return(
        <div className = {`season-display ${season}`}>
            {/* <i className = {`${getIcon(season)} icon`}/>
            <h1>{getMessage(season)}</h1>
            <i className = {`${getIcon(season)} icon`}/> */}

            <i className = {`icon-top-left massive ${iconName} icon`}/>
            <h1>{message}</h1>
            <i className = {`icon-bottom-right massive ${iconName} icon`}/>

        </div>
    );
}

export default seasonDisplay;
