import React, { FC } from 'react';
import { AlertComponentInterface } from './interface';
import style from './style.module.css';
import icon_carreer from './../../Assets/career.svg';

export const Alert: FC<AlertComponentInterface> = () => {

    return <div className={style.alertContent}>
        <div className={style.alertContentImageContent}>
            <img src={icon_carreer} alt="alert-premium" />
        </div>
        <div>
            <p className={style.alertTitle}>Premium Account</p>
            <p className={style.alertTextContent}>You have a premium account, granting you access to all the remarkable features offered by ResumeDone. With this privilege, you can indulge in the freedom of downloading an unlimited number of resumes and cover letters in both PDF and Word formats.</p>
        </div>
    </div>

}
