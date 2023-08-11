import React, { FC } from 'react';
import { MainComponentInterface } from './interface';
import { Alert } from '../Alert';
import style from './style.module.css';
import classNames from 'classnames';

export const Main: FC<MainComponentInterface> = () => {

    return <div className={classNames("pure-g",style.mainContent)}>
        <div className="pure-u-1">
            <Alert />
        </div>
    </div>

}
