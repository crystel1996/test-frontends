import React, { FC } from 'react';
import { PremiumComponentInterface } from './interface';
import { Sidebar } from '../Sidebar';
import { Main } from '../Main';
import style from './style.module.css';

export const Premium: FC<PremiumComponentInterface> = () => {

    return <div className={style.premiumContent}>
    
        <Sidebar />

        <Main />
    
    </div>

}
