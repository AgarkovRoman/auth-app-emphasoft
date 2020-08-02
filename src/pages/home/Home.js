import React from "react";
import '../../App.sass';
import {Link} from "react-router-dom";

function Home() {
    return (
        <>
            <h1 className="main-title">Home</h1>
            <ul>
                <li>
                    <Link to="/first">First task</Link>
                </li>
                <li>
                    <Link to="/second">Second task</Link>
                </li>
            </ul>
        </>
    )
}

export default Home;
