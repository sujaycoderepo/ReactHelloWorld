import React from 'react'

const spinner = (props) => {
    return(
        <div>
            <div className= "ui active dimmer">
                <div className="ui text loader">{props.message}</div>
            </div>
        </div>
    );
}

spinner.defaultProps ={
    message : "Loading .......... "
}

export default spinner;