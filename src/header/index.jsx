import React from 'react';
import './style.css';
import Logo from './../media/logo.jpg';

export const Header = props => {
    return(
        <header className="globalHeader">
            <div className="pageContainer">
                <div className={`logo`}>
                    <img src={Logo} />
                </div>
                <div className={'searchField'}>
                    <form method="post">
                        <input type="text" name="search" placeholder="Search..."/>
                    </form>
                </div>
            </div>
        </header>
    );
}