import type { MouseEventHandler } from 'react';
import classnames from 'classnames'

import './style.css';

type ChainProps = {
    className?: string,
    name: string
    onClick: MouseEventHandler<HTMLSpanElement>,
};

export const Chain = ({ onClick, className, name } : ChainProps) => {
    return <span
        className={classnames("card-chain-logo", className)}
        title={name}
        style={{
            backgroundImage: `url('./assets/logos/${name}.svg')`,
        }}
        onClick={onClick}
    />
}
