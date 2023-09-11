import { Chain } from "../";
import classnames from 'classnames'

import './style.css';

export const ChainTag = ({ isActive, isFiltered, onClick, ...props }) => {
    return (
        <div
            className={classnames("chain-tag", { isBlackedOut: !isActive && isFiltered })}
            onClick={onClick}
        >
            <span className="chain-tag__name">
                {props.name}
            </span>
            // todo: className = 'small'
            <Chain {...props} />
        </div>
    )
}
