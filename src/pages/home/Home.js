import React from "react";
import '../../App.sass';
import {Link} from "react-router-dom";

function Home() {
    return (
        <>
            <h1 className="main-title">Home</h1>
            <ul>
                <li className='first-link'>
                    <Link to="/first" className="link">First task</Link>
                </li>
            </ul>
        </>
    )
}

export default Home;
