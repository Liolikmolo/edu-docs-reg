import React from 'react';
import Card from "@/app/ui/dashboard/card/card";
import s from "@/app/ui/dashboard/dashboard.module.css"
import Rightbar from "@/app/ui/dashboard/rightbar/rightbar";
import Transactions from "@/app/ui/dashboard/transactions/transactions";
import Chart from "@/app/ui/dashboard/chart/chart";


const Dashboard = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.main}>
                <div className={s.cards}>
                    <Card/>
                    <Card/>
                    <Card/>
                    
                </div>
                <Transactions/>
                <Chart/>
            </div>
            <div className={s.side}>
                <Rightbar/>
            </div>
        </div>
    );
};

export default Dashboard;