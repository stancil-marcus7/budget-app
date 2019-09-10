import React from 'react';
import {createStore} from 'redux';

//Action generators - functions that return action objects
//If payload doesn't exist, we will default it to a default value
//We used destructuring to access the incrementBy property of the object that's being passed in
const incrementCount = ({incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrememtCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({setBy} = {}) => ({
  type: 'SET',
  setBy
})

const resetCount = () => ({
  type: 'RESET',
})

const Redux101 = () => {
 
  //Reducers
  //1. Reducers are pure functions (functions that don't rely on or change outside data)
  //2. Never change state or action

  //Count in the brackets is the default value for count
  const countReducer = (state = {count: 0}, action) => {
    console.log('running');

    switch(action.type) {
      case 'INCREMENT':
        //If incrementBy is an actual number then we will increment by that number; if it's not a number, we will increment by 1
          return {
            count: state.count + action.incrementBy
          }
      case 'DECREMENT':
          return {
            count: state.count - action.decrementBy
          }
      case 'SET':
        return {
          count: action.setBy
        }
      case 'RESET':
        return {
          count: 0
        }
      default:
          return state;
    }
  };

  const store = createStore(countReducer); 

  const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
  })



  store.dispatch(incrementCount({incrementBy: 5}));

  store.dispatch(incrementCount());

  store.dispatch(decrememtCount({decrementBy: 10}));

  store.dispatch(setCount({setBy: 101}));

  store.dispatch(resetCount());

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
