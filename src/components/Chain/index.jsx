import classnames from 'classnames'

import './style.css';

export const Chain = ({ onClick, className, name }) => {
    return <span
        className={classnames("card-chain-logo", className)}
        title={name}
        style={{
            backgroundImage: `url('./assets/logos/${name}.svg')`,
        }}
        onClick={onClick}
    />
}
