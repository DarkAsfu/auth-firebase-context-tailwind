import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div className='w-10/12 mx-auto pl-5'>
            <h3>This is Home
                {
                    user &&
                    <small>{user.displayName}</small>
                }
            </h3>

        </div>
    );
};

export default Home;