'use client'
import React from 'react';
import {menuLinkProps} from "@/app/ui/dashboard/sidebar/sidebar";
import Link from "next/link";
import {usePathname} from "next/navigation";
import s from "./menuLink.module.css";

const MenuLink = ({item}: {item: menuLinkProps }) => {

    const pathname = usePathname()
    console.log("menuLink", pathname);

    return (
        <Link href={item.path} className={`${s.container} ${pathname === item.path && s.active}`}>
            {item.icon}
            {item.title}
        </Link>
    );
};

export default MenuLink;