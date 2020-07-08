import React, { useState, useEffect } from 'react'
import Contact from './Contact';

export default function ListContact() {

    const [hasError, setErrors] = useState(false);
    const [users, setUsers] = useState([]);

    async function fetchData() {
        const res = await fetch("http://localhost:3000/users");
        res
            .json()
            .then(res => setUsers(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {users.map(user => <Contact contactPerson={user}/>)}
        </div>
    )
}