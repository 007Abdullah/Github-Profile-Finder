import React from 'react';
import './App.css'

export default function Card(props) {
    return (
        <>
            <div className='container'>
                <div className="imgCol">
                    <img src={props.data.avatar_url ? props.data.avatar_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhOaaBAY_yOcJXbL4jW0I_Y5sePbzagqN2aA&usqp=CAU"} alt="" />
                </div>
                <div className="follower">
                    <p>Followers <span style={{ color: '#1dbf73' }}>{props.data.followers}</span> </p>
                    <p>Following <span style={{ color: '#1dbf73' }}>{props.data.following}</span> </p>
                </div>
            </div>
        </>
    )
}