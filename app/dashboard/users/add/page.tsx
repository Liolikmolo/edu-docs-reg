import React from 'react';
import s from '@/app/ui/users/addUser/addUser.module.css'

const AddUserPage = () => {
    return (
        <div className={s.container}>
            <form className={s.form} action="">
                <input type="text" placeholder="username" name="username" required />
                <input type="email" placeholder="email" name="email" required />
                <input type="password" placeholder="password" name="password" required />
                <input type="phone" placeholder="phone" name="phone" />
                <select name="isAdmin" id="isAdmin">
                    <option value={"false"} selected>Is Admin?</option>
                    <option value={"true"}>Yes</option>
                    <option value={"false"}>No</option>
                </select>
                <select name="isActive" id="isActive">
                    <option value={"true"} selected>Is active?</option>
                    <option value={"true"}>Yes</option>
                    <option value={"false"}>No</option>
                </select>
                <textarea
                    name="addres"
                    id="addres"
                    rows={16}
                    placeholder="Addres"/>
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUserPage;