import React, { FC } from 'react';
import { ListItemInterface, NavbarItemComponentInterface } from './interface';
import icon_template from './../../../Assets/icon_template.svg'
import style from './style.module.css';


const LIST_ITEM: ListItemInterface[] = [
    { libelle: 'My templates', icon: icon_template }
];

export const NavbarItem: FC<NavbarItemComponentInterface> = () => {

    return <div className={style.navbarItem}>
        
        <div className="pure-menu custom-restricted-width">
            <ul className="pure-menu-list">
                {LIST_ITEM.map((item, index) => {
                    return <li className="pure-menu-item" key={index}>
                        <img src={item.icon} alt={item.libelle} />
                        {item.libelle}
                    </li>
                })}
            </ul>
        </div>
    </div>

}
