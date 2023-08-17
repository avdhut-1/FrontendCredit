import React from 'react'
import Second from './Second';

function First() {
    let a = 20;
    return (
        <div>
            <Second></Second>
            <p>Hello value is {a}</p>
        </div>
    )
}

export default First
