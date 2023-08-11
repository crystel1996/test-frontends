import React, { FC } from 'react';
import { ListItemInterface, NavbarItemComponentInterface } from './interface';
import icon_template from './../../../Assets/icon_template.svg'
import icon_search from './../../../Assets/icon_search.svg'
import yellow_star from './../../../Assets/yellow_star.svg'
import icon_board from './../../../Assets/icon_board.svg'
import icon_board1 from './../../../Assets/board1.svg'
import group from './../../../Assets/Group.svg'
import icon_lock from './../../../Assets/lock.svg'
import style from './style.module.css';
import classname from 'classnames';

const LIST_ITEM: ListItemInterface[] = [
    { libelle: 'My templates', icon: icon_template, isBold: true},
    { libelle: 'Search', icon: icon_search, isBold: true},
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
    { libelle: 'Database Administrator', icon: group },
    { libelle: 'Computer Security', icon: group },
    { libelle: 'Computer Systems Analyst', icon: group },
    { libelle: 'My boards', icon : icon_board, isBold: true },
    { libelle: 'Board 1', icon : icon_board1 },
    { libelle: 'Board 2', icon : icon_board1 },
    { libelle: 'Board 3', icon : icon_board1 },
    { libelle: 'Board Agent 1', icon : icon_lock },
    { libelle: 'Board Agent 1', icon : icon_lock },
    { libelle: 'Board Agent 1', icon : icon_lock },
];

export const NavbarItem: FC<NavbarItemComponentInterface> = () => {

    return <div className={style.navbarItem}>
        
        <div className="pure-menu custom-restricted-width">
            <ul className="pure-menu-list">
                {LIST_ITEM.map((item, index) => {

                    const className = classname(
                            style.typographyMenuItem, 
                            item.isBold ? style.typographyMenuItemBold : undefined
                    );

                    return <li className={classname("pure-menu-item", style.alignCenter)} key={index}>
                        
                        <img src={item.icon} alt={item.libelle} />
                        <span className={className}>{item.libelle}</span>
                        
                    </li>
                })}
            </ul>
        </div>
    </div>

}
