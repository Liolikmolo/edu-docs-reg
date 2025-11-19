'use client'
import React from 'react';
import s from './navbar.module.css';
import {usePathname} from "next/navigation";
import {MdNotifications, MdOutlineChat, MdPublic, MdSearch} from "react-icons/md";

const Navbar = () => {

    const pathname = usePathname()

    return (
        <div className={s.container}>
            <div className={s.title}>{pathname.split("/").pop()}</div>
            <div className={s.menu}>
                <div className={s.search}>
                    <MdSearch />
                    <input type={'text'} placeholder={'Search...'} className={s.input}/>
                </div>
                <div className={s.icons}>
                    <MdOutlineChat size={20} />
                    <MdNotifications size={20} />
                    <MdPublic size={20} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;