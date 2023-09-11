import classnames from 'classnames'
import { Dispatch } from 'react'

import './style.css';

type ChainProps = {
    onClick: Dispatch<string>,
    className: string,
    name: string
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
