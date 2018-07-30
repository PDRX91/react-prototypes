import React from 'react';

export default props => {
    const {info} = props;
    return(
        
        <div className="col-3">
            <img src={info['im:image'][2].label}/>
            <h3>{info['im:name'].label}</h3>
            <p>{info.summary.label}</p>
        </div>
    )
}