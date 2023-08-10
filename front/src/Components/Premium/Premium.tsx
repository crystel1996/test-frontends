import React, { FC } from 'react';
import { PremiumComponentInterface } from './interface';
import { Sidebar } from '../Sidebar';
import { Main } from '../Main';

export const Premium: FC<PremiumComponentInterface> = () => {

    return <>
    
        <Sidebar />

        <Main />
    
    </>

}
