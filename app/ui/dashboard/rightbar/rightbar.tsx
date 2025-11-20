import React from 'react';
import s from './rightbar.module.css'
import Image from "next/image";
import avatar from '@/public/vercel.svg'
import {MdPlayCircleFilled} from "react-icons/md";

const Rightbar = () => {
    return (
        <div className={s.container}>
            <Item/>
            <Item/>
        </div>
    );
};

const Item =() => {
    return (
        <div className={s.item}>
            <div className={s.bgContainer}>
                <Image src={avatar} alt={'avatar'} fill className={s.bg}/>
            </div>
            <div className={s.texts}>
                <span className={s.notifocation}>Available now</span>
                <h3 className={s.title}>How to use the new version of Admin Dashboard?</h3>
                <span className={s.subtitle}>Takes 4 minutes for learn</span>
                <p className={s.descr}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam assumenda autem blanditiis deleniti doloremque ducimus ea enim ex excepturi expedita iusto nam nostrum perferendis perspiciatis reprehenderit sit, tempore, voluptas!</p>
                <button className={s.btn}>
                    <MdPlayCircleFilled/>
                    Watch
                </button>
            </div>
        </div>
    )
}

export default Rightbar;