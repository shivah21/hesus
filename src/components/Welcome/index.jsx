import React, { useContext } from 'react';
import style from './style.css';
export const Welcome = ({
    greeting = {
        name: null,
        message: null
    }, 
    aboutUs = ''}) => {
    return (
        <div className="wrapper introSection">
            {greeting.name && greeting.message ? (
                <article className="container greeting">
                    <h2><span>Welcome</span> <strong>{greeting.name}</strong></h2>
                    <p>{greeting.message}</p>
                </article>
            ) : null}
            {aboutUs ? (
                <article className="container aboutUs borderTop">
                    <h2>About Us</h2>
                    <p>{aboutUs}</p>
                </article>
            ) : null}
        </div>
    );
}