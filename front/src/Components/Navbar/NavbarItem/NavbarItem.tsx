import React, { FC } from 'react';
import { ListItemInterface, NavbarItemComponentInterface } from './interface';
import icon_template from './../../../Assets/icon_template.svg'
import icon_search from './../../../Assets/icon search.svg'
import yellow_star from './../../../Assets/yellow_star.svg'
import group from './../../../Assets/Group.svg'
import style from './style.module.css';


const LIST_ITEM: ListItemInterface[] = [
    { libelle: 'My templates', icon: icon_template},
    { libelle: 'Search', icon: icon_search},
    { libelle: 'Software Engineer', icon: yellow_star },
    { libelle: 'Network Engineer', icon: yellow_star },
    { libelle: 'Computer hardware engineer', icon: yellow_star },
    { libelle: 'Technical Support', icon: yellow_star },
    { libelle: 'Network administrator', icon: yellow_star },
    { libelle: 'Management', icon: yellow_star },
    { libelle: 'Data analysis', icon: yellow_star },
    { libelle: 'Computer technician', icon: yellow_star },
    { libelle: 'Post Search 1', icon: group },
    { libelle: 'Post Search 2', icon: group },
    { libelle: 'Computers and information...', icon: group },
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
