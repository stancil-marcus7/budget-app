import React from 'react';

const Destructuring = () => {
    const person = {
        name: "Marcus",
        age: 23,
        location: {
            city: 'Fort Washington',
            temp: 101
        }
    }

    const {name, age} = person;

    console.log(`${name} is ${age}`)

    console.log
    
    return(
        <div>
            <li></li>
        </div>
    )
}

export default Destructuring;