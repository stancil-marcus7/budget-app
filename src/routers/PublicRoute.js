import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/nav/Header'

export const PrivateRoute = ({ 
    isAuthenticated,
    component: Component,
    //Rest is the trest of the prop stuff
    ...rest}) => (
    <Route {...rest} component={(props)=> (
        isAuthenticated ? (
            <div>
                <Redirect to="/dashboard"/>
            </div>
           
        ):(
            <Component {...props}/>
        )
)}/>
    )

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute);