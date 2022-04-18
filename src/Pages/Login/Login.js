import React, { useEffect, useRef, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';


const Login = () => {
    const emailRef = useRef('');
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email:'',
        password:'',
        general: '',
    })
    

    const [signInWithEmailAndPassword,user,loading,hookError,] = useSignInWithEmailAndPassword(auth);

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

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

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

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }


    return (
        <div className='login-container'>
            <div className="login-title">LOGIN</div>
            <form className='login-form' onSubmit={handleLogin}>
                <input type="text" placeholder='Your Email' onChange={handleEmailChange} />
                {errors?.email && <p className='error-message'>{errors.email}</p>}
                <input type="password" placeholder='password' onChange={handlePasswordChange} />
                {errors?.password && <p className='error-message'>{errors.password}</p>}
                <button>Login</button>

                <p> <button onClick={resetPassword}>Reset Password</button> </p>

                <ToastContainer />
                <p>Don't have an account? <Link to='/signUp'>Sign Up first</Link></p>
            </form>
        </div>
    );
};

export default Login;