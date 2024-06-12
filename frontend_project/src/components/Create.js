import React from 'react';
import { useState } from 'react';
import '../style.css'
import env from '../env.json';
import '../styles/noteStyle.css'

function Create() {
    const [url, setURL] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [lineForm, setLineForm] = useState('');

    let sendData = (obj) => {
        setLineForm('hide');
        setLineClass('');
        fetch(env.urlBE, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(response => {
                if (response.result) {
                    console.log(response);
                    setURL(env.urlFE + response.url);
                }
            });
    }

    let sendForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        if (note === '') {
            alert('Please enter the message');
            return false;
        }
        sendData({ "note": note });
    }

    return (
        <div onSubmit={sendForm} class='Create' >
            <form action="" className={lineForm} class='form'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <label htmlFor="">Enter your Note</label>
                <input name="note" id="note" placeholder='Enter your note' className='input'></input>
                <button type='submit' class='btn'>Create Note</button>
            </form>
            <div className={lineClass}>
                <div class='matrix-text'>{url}</div>
                <div><button class='btn' onClick={function () { window.location.reload() }}>Create new Note</button></div>
            </div >
        </div >
    );
}

export default Create;