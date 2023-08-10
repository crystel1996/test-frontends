import React, { FC } from 'react';
import { NavbarComponentInterface } from './interface';
import style from './style.module.css';
import { NavbarItem } from './NavbarItem';


export const Navbar: FC<NavbarComponentInterface> = () => {

    return <div className={style.navbar}>
        <div className={style.navbarContent}>
            <NavbarItem />
        </div>
    </div>

}
