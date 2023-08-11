import React, { FC } from 'react';
import { MainComponentInterface } from './interface';
import { Alert } from '../Alert';
import style from './style.module.css';
import classNames from 'classnames';
import { Information } from '../Information';

export const Main: FC<MainComponentInterface> = () => {

    return <div className={classNames(style.mainContent)}>
        <div>
            <Alert />
        </div>
        <div>
            <Information />
        </div>

    </div>

}
