import React from 'react';
import Sidebar from "@/app/ui/dashboard/sidebar/sidebar";
import Navbar from "@/app/ui/dashboard/navbar/navbar";
import s from '@/app/ui/dashboard/dashboard.module.css';

const Layout = ({children}:{children:React.ReactNode}) => {
    return (
        <div className={s.container}>
            <div className={s.menu}>
                <Sidebar/>
            </div>
            <div className={s.content}>
                <Navbar/>
                {children}
            </div>
        </div>
    );
};

export default Layout;