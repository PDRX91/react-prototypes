import React from 'react';
import ReactDOM from 'react-dom';




function luckyNumber() {
    return Math.floor((Math.random()*1000) + 1);
}

const userObj = {
    name: 'Paul',
    number: luckyNumber()
}

function greeting(userObj) {
    return (
        <div className="container">
            <h1>Welcome, {userObj.name}! </h1>
            <h2>Your lucky number is: {userObj.number}</h2>
        </div>
    )
}

ReactDOM.render(
    // <h1 className="container">React Prototypes!</h1>,
    greeting(userObj),
    document.getElementById('root')
);