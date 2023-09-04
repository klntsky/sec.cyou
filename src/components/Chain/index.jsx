import { classNameByObject } from '../../helpers/classNameByObject';

import './style.css';

export const Chain = ({ onClick, className, name }) => {
    return <span
        className={classNameByObject({
            "card-chain-logo": true,
            [className]: true,
        })}
        title={name}
        style={{
            backgroundImage: `url('./assets/logos/${name}.svg')`,
        }}
        onClick={onClick}
    />
}
