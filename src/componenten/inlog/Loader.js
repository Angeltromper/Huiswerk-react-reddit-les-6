import React from 'react';
import './Loader-module.css';

function Loader() {
    return (
        <div className="loader">
            <div className="outer-wrapper">
                <div className="circle circle-one"/>
            </div>
            <div className="inner-wrapper">
                <div className="circle circle-two"/>
            </div>
        </div>
    );
}

export default Loader;




