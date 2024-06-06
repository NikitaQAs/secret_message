import React from 'react';
import { useState } from 'react';
import '../style.css'
import env from '../env.json';

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
        <div onSubmit={sendForm} >
            <form action="" className={lineForm}>
                <label htmlFor="">Enter your Note</label>
                <textarea name="note" id="note" defaultValue='Enter your Note'></textarea>
                <button type='submit'>Create Note</button>
            </form>
            <div className={lineClass}>
                <div>{url}</div>
                <div><button onClick={function () { window.location.reload() }}>Create new Note</button></div>
            </div >
        </div >
    );
}

export default Create;