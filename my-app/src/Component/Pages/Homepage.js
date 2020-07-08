import React from 'react'
import {Link} from 'react-router-dom'
import ListContact from '../Contact/ListContact'
import Search from '../Interface/Search'



export default function Homepage() {
    
    return (
        <div>
            {/* Text-field to search through all the entries by name or
                number. When I enter text in the field, the page will be reloaded with a table
                containing all the entries that match the text I entered.*/}
            <h1>Contacts</h1>
            <Search/>

            {/* Text field */}
            <br/>
            <ListContact/>
            <br/>
            
            {/*The page contains a link to the "add new entry" page  */}
            <Link to='/add'><button className='btn btn-info btn-lg'>Add new entry</button></Link>

            {/* When an entry is displayed, it contains a link to the "edit this entry" page */}


        </div>
    )
}
