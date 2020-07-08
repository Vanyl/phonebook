import React from 'react';
import { Link } from 'react-router-dom';



export default function Contact(props) {

    // const contact = props.location.state.contact;
    const { contactPerson } = props;

    function deleteContact() {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(),
            props: {id: contactPerson._id}
        };
        fetch('http://localhost:3000/users/'+ contactPerson._id , requestOptions)
            .then(response => window.location.reload())
    }

    return (
        <div className='container'>

            <div className="card text-center">
                <div className="card-body mb-3">
                    <h5 className="card-title">{contactPerson.firstName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{contactPerson.lastName}</h6>
                    <p className="card-text">{contactPerson.phone}</p>
                    <Link to={{pathname: '/edit', state: {contact: contactPerson}}}><button className='btn btn-danger btn-lg'>Edit</button></Link>
                    <button 
                    onClick={() => deleteContact(contactPerson._id)}
                    type='submit'
                    value='Delete'
                    className='btn btn-danger btn-lg ml-1'>Delete</button>
                </div>
            </div>
        </div>
    )
}
