import React, {useEffect, useState} from "react";
import './firstTask.sass'
import axios from "axios";

function First() {
    const [users, setUsers] = useState([]);
    const [q, setQ] = useState('');
    const [sortType, setSortType] = useState('inc')

    const axiosInstance = axios.create({
        // baseURL: 'http://emphasoft-test-assignment.herokuapp.com/',
        baseURL: 'https://jsonplaceholder.typicode.com/',
        // withCredentials: false,
        headers: {
            // 'Content-Type' : 'application/json',
            // 'Accept' : 'application/json',
            // 'Authorization' : '781bd9f1de084f4daa7ba2aa8a71a2eab855354e',
            // "Authorization": {
            //                     username: 'test_super',
            //                     password: 'Nf<U4f<rDbtDxAPn'
            // }
            // "X-CSRFToken": "NjTJZ8rN98YmDnRO5qjvw5GKeAgCGNBqal6kJp2NQQYLWloF4EvH36ss1m8tRlwm"
        }
    })

    useEffect(() => {
        // axiosInstance.get('api/v1/users/')
        axiosInstance.get('users')
            .then(response => {
                setUsers(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    function search(rows) {
        return rows.filter(row => row.username.toLowerCase().indexOf(q) > -1)
    }

    function SortById() {
        if (sortType === 'inc') {
            setUsers(users.reverse());
            setSortType('dec')
        } else if (sortType === 'dec') {
            setUsers(users.reverse());
            setSortType('inc')
        }
    }

    return (
        <div className="wrapper">
            <h1 className="main-title">First task</h1>
            <div className="controllers-container">
                <button className="button form__button button--blue" onClick={SortById}>SortById</button>
                <input className="form__input" type="text" value={q} onChange={e => setQ(e.target.value)} placeholder="Find someone"/>
            </div>
            <UsersFetching users={search(users)} setUsers={setUsers}/>
        </div>
    )
}

function UsersFetching({users}) {

    return (
        <ul className='user-list'>
            {
                users.map(user => <li key={user.id}>{`id:${user.id} — ${user.username}`}</li>)
            }
        </ul>
    )
}

export default First;
