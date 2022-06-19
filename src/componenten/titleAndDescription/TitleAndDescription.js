import React from 'react';
import './TitleAndDescription-module.css';

function TitleAndDescription({ title, description }) {
    return (
        <>
            <h3 className="subreddit-specification-details-title">{title}</h3>
            <p className="subreddit-specification-details-description">{description}</p>
        </>
    );
}

export default TitleAndDescription;