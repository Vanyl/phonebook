import React from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import Contact from './Contact';
import { removeEmptyFields } from '../../Utils/utils';


export default function EditEntryPage(params) {
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const contact = params.location.state.contact;
    // console.log(contact);


    function onSubmitForm(formNewData) {
        const formDataWithoutEmptyFields = removeEmptyFields(formNewData);

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formDataWithoutEmptyFields),
            params: {id: contact._id}
        };


        fetch('http://localhost:3000/users/'+ contact._id, requestOptions)
            .then(response => {
                if(response.status === 200){
                    alert('Successfully edited')                    
                }
                history.push('/');                
            });
    }

    return (
        <div>
            {/* Contains a form for modifying an existing entry. */}
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className="form-group">
                    <label htmlFor='firstName'>Edit first name</label>
                    <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder= {contact.firstName}
                        name='firstName'
                        ref={register}
                    // value={this.state.firstname}
                    // onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor='lastName'>Edit last name</label>
                    <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder={contact.lastName}
                        name='lastName'
                        ref={register}
                    // value={this.state.firstname}
                    // onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor='phone'>Edit phone number</label>
                    <input
                        type='tel'
                        className='form-control form-control-lg'
                        placeholder={contact.phone}
                        name='phone'
                        ref={register}
                    // value={this.state.firstname}
                    // onChange={this.onChange}
                    />
                </div>

                <button
                    type='submit'
                    value='Edit contact'
                    className='btn btn-primary btn-lg btn-block'>
                    Edit contact
                    </button>
            </form>
        </div>
    )
}
