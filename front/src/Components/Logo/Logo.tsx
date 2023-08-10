import React, { FC } from 'react';
import { LogoComponentInterface } from './interface';
import { LogoImage } from './LogoImage';

export const Logo: FC<LogoComponentInterface> = () => {

    return <div>
        <LogoImage />
    </div>

}
