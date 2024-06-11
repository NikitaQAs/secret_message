import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import env from '../env.json';
import '../styles/noteStyle.css'

function Note() {
    let { noteURL } = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineCLass, setLineClass] = useState('');
    const [formError, setFormError] = useState('');
    const [formClass, setFormClass] = useState('');

    useEffect(() => {
        if (noteURL !== undefined) {
            fetch(env.urlBE, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({ "url": noteURL })
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    if (response.result) {
                        setNoteText(response.note);
                        setLineClass('');
                        setFormError('hide');
                        setFormClass('hide');
                    }
                    else if (!response.result) {
                        setLineClass('hide');
                        setFormError('');
                        setFormClass('hide');
                    }
                })
        }
        else {
            setLineClass('hide');
            setFormError('hide');
            setFormClass('');
        }
    }, [noteURL]);

    function getNote(event) {
        event.preventDefault();
        let url = event.target.elements.url.value.trim();
        if (url === '') {
            alert('Please enter hash');
            return false;
        }
        noteURL = url;
        window.location.href = env.urlFE + url;
    }

    function searchNote() {
        window.location.href = env.urlFE;
    }

    return (
        <div class='Note'>
            <div className={lineCLass}>
                <div>{noteText}</div>
                <div><button onClick={searchNote}>Check other Note</button></div>
            </div>
            <div className={formError}>
                <div class='matrix-text'>There is no such Note</div>
                <div><button onClick={searchNote} className="btn">Check other Note</button></div>
            </div>
            <div className={formClass}>
                <form action="" class="form" onSubmit={getNote}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <input type="text" name="url" id="url" className="input" placeholder="Enter Note" />
                    <button type="submit" className="btn" >Check the Note</button>
                </form>
            </div>
        </div>
    );
}

export default Note;