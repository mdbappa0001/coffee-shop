import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email:'',
        password:'',
        confirmPass:''
    })

    const [createUserWithEmailAndPassword,user,loading,hookError,] = 
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if(validEmail){
            setUserInfo({...userInfo, email: e.target.value})
            setErrors({...errors, email: ''})
        }
        else{
            setErrors({...errors, email: 'Invalid Email'})
            setUserInfo({...userInfo, email:''})
        }
        // setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        if(validPassword){
            setUserInfo({...userInfo, password: e.target.value})
            setErrors({...errors, password:''})
        }
        else{
            setErrors({...errors, password:"Minimum 6 characters!"})
            setUserInfo({...userInfo, password: ""})
        }
        // setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        if(e.target.value === userInfo.password){
            setUserInfo({...userInfo, confirmPass: e.target.value})
            setErrors({...errors, password:''})
        }
        else{
            setErrors({...errors, password:"Password Don't match"})
            setUserInfo({...userInfo,confirmPass: ""});
        }
        // setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    }

    useEffect(() => {
        const error = hookError ;
        if(error){
            switch(error?.code){
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;
                
                case "auth/invalid-password":
                    toast("Wrong password!!")
                    break;
                default:
                    toast("something went wrong")
            }
        }
    }, [hookError])

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

    return (
        <div className='login-container'>
            <div className="login-title">Sign Up</div>
            <form className='login-form' onSubmit={handleLogin}>
                <input type="text" placeholder='Your Email' onChange={handleEmailChange} />
                {errors?.email && <p className='error-message'>{errors.email}</p>}
                <input type="password" placeholder='password' onChange={handlePasswordChange} />
                {errors?.password && <p className='error-message'>{errors.password}</p>}
                <input type="password" placeholder='confirm password' onChange={handleConfirmPasswordChange} />
                <button>Sign Up</button>

                {/* {hookError && <p className='error-message'>{hookError?.message}</p>} */}
                <ToastContainer />
            </form>
        </div>
    );
};

export default SignUp;