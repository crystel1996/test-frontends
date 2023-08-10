import React, { FC } from 'react';
import { LogoComponentInterface } from './interface';
import { LogoImage } from './LogoImage';
import style from './style.module.css';

export const Logo: FC<LogoComponentInterface> = () => {

    return <div className={style.logoLayout}>
        <LogoImage />
    </div>

}
