import React from 'react';
import style from './style.css';

export const NewsFeed = ({ feeds = [] }) => {
    return (
        <div className="wrapper ">
            <h2>News Feed</h2>
            {feeds.map((feed,i) => (
                <article key={i} className={`newsFeed ${feed.sensationType} borderTop`}>
                    <aside></aside>
                    <main>
                        <header>{feed.title}</header>
                        <footer>
                            <span className="publishDate alignLeft">
                                {feed.publishDate}
                            </span>
                            <span className="author alignRight">
                                {feed.author}
                            </span>
                        </footer>
                    </main>
                </article>
            ))}
        </div>
    );
}