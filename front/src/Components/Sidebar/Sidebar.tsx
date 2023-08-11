import React, { FC } from 'react';
import { SidebarComponentInterface } from './interface';
import { Logo } from '../Logo';
import style from './style.module.css';
import { Navbar } from '../Navbar';
import { Account } from '../Account';

export const Sidebar: FC<SidebarComponentInterface> = () => {

    return <div className={style.sidebar}>
        
        <div className={style.sidebarLogo}>
            <Logo />
        </div>

        <Navbar />

        <div>
            <Account />
        </div>

    </div>

}
