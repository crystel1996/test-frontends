import React, { FC } from 'react';
import { AccountComponentInterface } from './interface';
import style from './style.module.css';
import profilePicture from './../../Assets/profile-picture-2.png'
import iconSetting from './../../Assets/icon_settings.svg'
import classNames from 'classnames';

export const Account: FC<AccountComponentInterface> = () => {
    return <div className={classNames(style.alignSpaceBetween, style.accountContent)}>
        <div className={style.alignItems}>
            <img className={style.profilePicture} src={profilePicture} alt="Clara" />
            <span>Clara</span>
        </div>
        <div>
            <img src={iconSetting} alt="Setting" />
        </div>
    </div>
}
