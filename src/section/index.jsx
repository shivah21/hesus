import React, { useContext } from 'react';
import style from './style.css';
import { RootContext } from './../App';
import { Welcome } from './../components/Welcome';
import { NewsFeed } from './../components/NewsFeed';
import { Registration } from './../components/Registration';
// import { getData } from './../API';
// const data = getData();
// export const RootContext = React.createContext(data);
export const Section = props => {
    const data = useContext(RootContext);
    const { 
        name, 
        message, 
        aboutUs,
        feeds
     } = data;
    return (
        <section className="pageContainer">
            <Welcome 
                greeting={{name, message}} 
                aboutUs={aboutUs}/>
            <span className="separator"></span>
            <NewsFeed feeds={feeds}/>
            
            <Registration />
        </section>
    );
}