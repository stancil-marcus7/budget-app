import React from 'react';

const Destructuring = () => {

    //Object Destructuring

    // const person = {
    //     name: "Marcus",
    //     age: 23,
    //     location: {
    //         city: 'Fort Washington',
    //         temp: 101
    //     }
    // }

    // //the anonymous is used as a default for the first name
    // const {name : firstname = 'Anonymous', age} = person;

    // console.log(`${firstname} is ${age}`)

    // //We're grabbing the city and location from person.location
    // const {city, temp: temperature} = person.location;
    // if (temperature && city){
    //     console.log(`It's  ${temperature} in ${city}`);
    // }

    // const book = {
    //     title: "Ego is the Enemy",
    //     author: 'Ryan Holiday',
    //     publisher: {
    //         name: 'Penguin'
    //     }
    // };
    
    // const {name: publisherName = "Self-Published"} = book.publisher;

    // console.log(publisherName);

    // Array Destructuring

    const address = ['3501 Stonesboro Road', "Fort Washington", "Maryland", "20744"];

    //There's no renaming syntax for arrays
    //But we can set default values
    const [city, state, zip] = address;
    console.log(`You are in ${city} ${state}`)

    const item =['Coffee (hot)', '$2.00', '$2.50', '$2.75']

    const [coffee, , price2] = item;

    console.log(`A medium ${coffee} costs ${price2}`);

    return(
        <div>
            <li></li>
        </div>
    )
}

export default Destructuring;