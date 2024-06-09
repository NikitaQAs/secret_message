import React from 'react';
import '../App.css';

function Main() {
    return (
        <div className="block">
            <a className="left" href="/create">
                <div className="matrix-text" >Create new Note</div>
            </a>
            <a className="right" href="/note">
                <div className="matrix-text" >Check Note</div>
            </a>
        </div >
    );
}

export default Main;
