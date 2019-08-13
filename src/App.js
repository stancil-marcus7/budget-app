import React from 'react';
import './App.css';
import './styles/styles.scss';
import AppRouter from '../src/routers/AppRouter'

class App extends React.Component{
 render(){
   return(
     <AppRouter/>
   )
 }
}

export default App;
