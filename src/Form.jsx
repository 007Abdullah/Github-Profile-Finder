import React, { useEffect, useState } from 'react';
import Card from './Card'
import './App.css'

export default function Form() {
    const [users, setUser] = useState({});
    const [name, setName] = useState('');

    useEffect(() => {
        getProfilegithub()
    }, [])

    async function getProfilegithub() {
        const api = await fetch(`https://api.github.com/users/${name}`);
        const data = await api.json()
        setUser(data);
    }
    function handelSubmit(event) {
        event.preventDefault();
        getProfilegithub();
        setName('');
    }
    return (
        <>
            <div className="container form">
                <Card data={users} />
                <form onSubmit={handelSubmit}>
                    <input type="text" required placeholder="ENTER USERNAME GITHUB PROFILE" value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} />
                    <br />
                    <button>FIND</button>
                </form>

            </div>
        </>
    )
}

