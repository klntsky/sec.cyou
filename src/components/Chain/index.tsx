import classnames from 'classnames'

import './style.css';

type ChainProps = {
    onClick: (_: unknown) => void,
    className?: string,
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
