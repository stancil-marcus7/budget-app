// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    //Must use props here to get info
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            {/* We spread out props to get the info property */}
            <WrappedComponent {...props}/>
        </div>
    )
}

const withAuthInfo = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth&& <p>You are authenticated</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);

const AuthInfo  = withAuthInfo(Info);

export default AuthInfo;