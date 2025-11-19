import React from 'react';
import s from './sidebar.module.css';
import {
    MdAnalytics,
    MdAttachMoney,
    MdDashboard,
    MdHelpCenter,
    MdLogout,
    MdOutlineSettings,
    MdPeople,
    MdShoppingBag,
    MdSupervisedUserCircle,
    MdWork
} from "react-icons/md";
import MenuLink from "@/app/ui/dashboard/sidebar/menuLink/menuLink";
import Image from "next/image";
import noavatar from "@/public/noa.png";

export type menuLinkProps = {
        title: string;
        path: string;
        icon: React.ReactNode;
}

const menuItems = [
    {
        title: 'Pages',
        list: [
            {
                title: 'Dashboard',
                path: '/dashboard',
                icon: <MdDashboard/>,
            },
            {
                title: 'Users',
                path: '/dashboard/users',
                icon: <MdSupervisedUserCircle/>,
            },
            {
                title: 'Products',
                path: '/dashboard/products',
                icon: <MdShoppingBag/>,
            },
            {
                title: 'Transactions',
                path: '/dashboard/transactions',
                icon: <MdAttachMoney/>,
            }
        ]
    },
    {
        title: 'Analytics',
        list: [
            {
                title: 'Revenue',
                path: '/dashboard/revenue',
                icon: <MdWork/>,
            },
            {
                title: 'Reports',
                path: '/dashboard/reports',
                icon: <MdAnalytics/>,
            },
            {
                title: 'Teams',
                path: '/dashboard/teams',
                icon: <MdPeople/>,
            }
        ]
    },
    {
        title: 'User',
        list: [
            {
                title: 'Settings',
                path: '/dashboard/settings',
                icon: <MdOutlineSettings/>,
            },
            {
                title: 'Help',
                path: '/dashboard/help',
                icon: <MdHelpCenter/>,
            }
        ]
    }
]

const Sidebar = () => {
    return (
        <div className={s.container}>
            <div className={s.user}>
                <Image className={s.userImage} src={noavatar} alt={"no avatar"} width={50} height={50} />
                <div className={s.userDetail}>
                    <span className={s.username}>John Joe</span>
                    <span className={s.userRole}>Administrator</span>
                </div>
            </div>
            <ul className={s.list}>
                {menuItems.map((menuItem) => (
                    <li key={menuItem.title}>
                        <span className={s.cat}>{menuItem.title}</span>
                        {menuItem.list.map((item) => (
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>
            <button className={s.logout}>
                <MdLogout />
                Logout
            </button>
        </div>
    );
};

export default Sidebar;