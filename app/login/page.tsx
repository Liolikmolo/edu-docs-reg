import React from 'react';
import s from '@/app/ui/login/login.module.css'

const Login = () => {
    return (
        <div className={s.container}>
            <form className={s.form}>
                <h1>Log In</h1>
                <input type={'text'} name={'username'} placeholder={'Username'}/>
                <input type={'password'} name={'password'}/>
                <button>Log in</button>
            </form>
        </div>
    );
};

export default Login;