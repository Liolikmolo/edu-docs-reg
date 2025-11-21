import React from 'react';
import s from '@/app/ui/users/singleUser/singleUser.module.css'
import Image from "next/image";
import ava from '@/public/noa.png'

const SingleUserPage = () => {
    return (
        <div className={s.component}>
            <div className={s.infoContainer}>
                <div className={s.imgContainer}>
                    <Image src={ava} alt={'avatar'} fill/>
                </div>
                John Doe
            </div>
            <div className={s.formContainer}>
                <form className={s.form}>
                <label>UserName</label>
                <input type={'text'} name={'username'} placeholder={'John Doe'}/>
                <label>Email</label>
                <input type={'email'} name={'email'} placeholder={'JohnDoe@gmail.com'}/>
                <label>Password</label>
                <input type={'password'} name={'password'}  />
                <label>Phone</label>
                <input type={'text'} name={'phone'} placeholder={'+123456789'}/>
                <label>Address</label>
                <textarea name={'address'} placeholder={'New York'}/>
                <label>Is Admin?</label>
                <select name={'isAdmin'}>
                    <option value={'true'}>Yes</option>
                    <option value={'false'}>No</option>
                </select>
                <label>Is Active?</label>
                <select name={'isActive'}>
                    <option value={'true'}>Yes</option>
                    <option value={'false'}>No</option>
                </select>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default SingleUserPage;