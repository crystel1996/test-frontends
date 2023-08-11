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

        <div>
            <ul>
                <li>
                    <a href="#">Terms & Conditions</a>
                </li>
                <li>
                    <a href="#">Privacy Policy</a>
                </li>
                <li>
                    <a href="#">FAQ</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
            </ul>
        </div>

    </div>

}
