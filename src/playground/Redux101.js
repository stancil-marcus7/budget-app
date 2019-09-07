import React from 'react';
import {createStore} from 'redux';

const Redux101 = () => {
 
  //Count in the brackets is the default value for count
  const store = createStore((state = {count: 0}, action) => {
    console.log('running');

    switch(action.type) {
      case 'INCREMENT':
        //If incrementBy is an actual number then we will increment by that number; if it's not a number, we will increment by 1
        const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy: 1;
          return {
            count: state.count + incrementBy
          }
      case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy: 1;
          return {
            count: state.count - decrementBy
          }
      case 'SET':
        return {
          count: action.count
        }
      case 'RESET':
        return {
          count: 0
        }
      default:
          return state;
    }
  });

  const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
  })


  store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
  })

  store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
  })

  store.dispatch({
    type: "SET",
    count: 101
  })

  unsubscribe();

  store.dispatch({
    type: 'DECREMENT'
  })

  store.dispatch({
    type: 'RESET'
  })

  return (
    <div>
      <ol>
        <li>We set up Redux store</li>
        <li>We used store.dispatch and a switch case to update the state</li>
        <li>Add subscribe to check when state changes</li>
        <li>Add unsubscribe to stop checking on state</li>
        <li>Add incrementBy to provide a value to increase the count by</li>
        <li>Add decrementBy to provide a value to decreese the count by</li>
      </ol>
    </div>
  )
}

export default Redux101
