import React, {useState} from 'react'
import './Search.css'


export default function Search() {

    const [search, setSearch] = useState('');
    const [users, setUsers] = useState();
    const handleChange = event => {
        console.log('coucou');
        // console.log(users);
        // setSearch(event.target.value)
    }




    return (
        <React.Fragment>
            <div className='md-form active-search mb-3 mt-0'>
                <input 
                className="form-control" 
                type="text" 
                placeholder="Search" 
                aria-label="Search"
                value={search}
                onChange={handleChange}
                />
            </div>
        </React.Fragment>
    )
}
