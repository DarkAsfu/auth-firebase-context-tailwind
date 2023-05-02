import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import Google from './Google';

const Register = () => {
    const {user, createUser} = useContext(AuthContext)
    const [error, setError] = useState('');
    const [succcess, setSuccess] = useState('');
    console.log(user, createUser);
    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            setSuccess('Succesfully registered please login')
            setError('')
        })
        .catch(error =>{
            console.log(error.message)
            setError(error.message)
            setSuccess('')
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center px-10">
                    <h1 className="text-4xl font-bold">Please Register !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p className="label-text-alt ">Already have an account? please <Link to='/login' className='text-blue-400'>Sign in</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <Google></Google>
                        <label className="label">
                                <p className="label-text-alt text-red-600">{error}</p>
                                <p className="label-text-alt text-green-600">{succcess}</p>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;