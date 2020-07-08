import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";

export default function AddNewEntry() {
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const [state, setState] = useState({firstName : '', lastName : '', phone : ''});

    const handleInputChange = e => {
        const {name, value} = e.target
        setState({...state, [name]: value})
    }

    function onSubmitForm(formData) {

        // const data = formData;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };
        fetch('http://localhost:3000/users', requestOptions)
            // .then(response => console.log(response))
            .then(response => history.push('/'))
    }

    return (
        <React.Fragment>
        <div className='card mb-3'>
            <div className="card-header">New entry</div>
            <div className="card-body">
            {/* Contains a form for entering a new entry (fist name, last name, telehpone number ) */}
            <form onSubmit={handleSubmit(onSubmitForm)}>
                    <div className="form-group">
                        <label htmlFor='firstname'>First name</label>
                        <input 
                        type='text'
                        name='firstName'
                        id='firstName'
                        className='form-control form-control-lg'
                        placeholder='First name'
                        required
                        ref={register}
                        value={state.firstName}
                        onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor='lastname'>Last name</label>
                        <input
                        type='text'
                        name='lastName'
                        id='lastName'
                        className='form-control form-control-lg'
                        placeholder='Last name'
                        required
                        ref={register}
                        value={state.lastName}
                        onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor='phone'>Telephone</label>
                        <input
                        type='tel'
                        name='phone'
                        id='phone'
                        className='form-control form-control-lg'
                        pattern='[+][0-9]{1,} [0-9]{1,} [0-9]{6,}'
                        placeholder='+32 34 567894'
                        required
                        ref={register}
                        value={state.phone}
                        onChange={handleInputChange}
                        />
                    </div>
                    <button
                    type='submit'
                    value='Add contact'
                    className='btn btn-primary btn-lg btn-block'>
                    Add contact
                    </button>
                </form>
            </div>
        </div>
        </React.Fragment>
    )
}