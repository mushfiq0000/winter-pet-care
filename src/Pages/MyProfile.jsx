import React from 'react';
import { use } from 'react';
import { ContextData } from '../Context/ContextData';

const MyProfile = () => {

    const {data} = use(ContextData)
    console.log(data);
    
    return (
        <div>
            My Profile
        </div>
    );
};

export default MyProfile;  