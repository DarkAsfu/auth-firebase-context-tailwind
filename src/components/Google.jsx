import React, { useContext } from 'react';
import img from '../../public/google .png'
import gitImg from '../../public/github.png'
import fbImg from '../../public/facebook.png'
import { AuthContext } from '../providers/AuthProviders';
const Google = () => {
    const {googleLogIn, gitHubLoginIn, facebookLogIn} = useContext(AuthContext);
    const handleGoogleSignIn = () =>{
        // console.log('hello');
        googleLogIn()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);

        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    const handleGithubSignIn = () =>{
        gitHubLoginIn()
        .then(result =>{
            const gitLoggedIn = result.user;
            console.log(gitLoggedIn);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    const handleFacebookLogIn = () =>{
        facebookLogIn()
        .then(result =>{
            const facebookLogged = result.user;
            console.log(facebookLogged);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <p className='text-center'>------ or use one of these option ------</p>
            <div className='flex gap-4 justify-center'>
            <img onClick={handleGoogleSignIn} className='w-16  mt-2 border p-2' src={img} alt="" />
            <img onClick={handleGithubSignIn} className='w-16  mt-2 border p-2' src={gitImg} alt="" />
            <img onClick={handleFacebookLogIn} className='w-16  mt-2 border p-2' src={fbImg} alt="" />
            </div>
        </div>
    );
};

export default Google;