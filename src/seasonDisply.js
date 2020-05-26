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

const getMessage = (season) => {
    return season === 'winter' ? 'Its Cold !!!!' : 'Its too Hot !!!! ';
}

const getIcon = (season) =>{
    return season === 'winter' ? 'snowflake' : 'sun';
}

const seasonDisplay = (props) =>{

    const season = getSeason(props.lat, new Date().getMonth());

    return(
        <div>
            <i className = {`${getIcon(season)} icon`}/>
            <h1>{getMessage(season)}</h1>
            <i className = {`${getIcon(season)} icon`}/>
        </div>
    );
}

export default seasonDisplay;
