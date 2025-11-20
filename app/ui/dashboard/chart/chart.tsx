'use client'
import React from 'react';
import s from './chart.module.css'
import {Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

const data = [
    {
        name: "Sun",
        visit: 4000,
        click: 2400
    },
    {
        name: "Mon",
        visit: 3000,
        click: 1398
    },
    {
        name: "Tue",
        visit: 2000,
        click: 3800
    },
    {
        name: "Wed",
        visit: 2780,
        click: 3908
    },
    {
        name: "Thu",
        visit: 1890,
        click: 4800
    },
    {
        name: "Fri",
        visit: 2390,
        click: 3800
    },
    {
        name: "Sat",
        visit: 3490,
        click: 4300
    }
]
const Chart = () => {
    return (
        <div className={s.container}>
            <h2 className={s.title}>Weekly Recap</h2>
            <LineChart
                style={{ width: '100%', height: '100%' }}
                responsive
                data={data}
                margin={{
                top: 5,
                right: 30,
                bottom: 5,
                left: 20,
            }}
                >
            <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeWidth={2} name="Visits" strokeDasharray="5 5"/>
            <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeWidth={2} name="Clicks" strokeDasharray="3 4 5 2"/>
            <XAxis dataKey="name" height={50} />
            <YAxis width="auto" label={{ position: 'insideLeft', angle: -90 }} />
            <Legend />
            <Tooltip contentStyle={{background:'#151c2c', border:'none'}}/>
        </LineChart>
        </div>
    );
};

export default Chart;