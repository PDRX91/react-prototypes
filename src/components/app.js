import React from 'react';
import ContactList from './contact_list';

export default function App() {
    return(
        <div className='container'>
            <h1 className="text-center my-3">Address Book</h1>
            <div className='row'>
                <ContactList />
            </div>
        </div>
    )
}