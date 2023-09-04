import { Chain } from "../";
import { classNameByObject } from '../../helpers/classNameByObject';

import './style.css';

export const ChainTag = ({ isActive, isFiltered, onClick, ...props }) => {
    return <div className={classNameByObject({
            "chain-tag": true,
            isActive,
            isBlackedOut: !isActive && isFiltered,
        })} onClick={onClick}>
        <span className="chain-tag__name">{props.name}</span>
        <Chain className="small" {...props} />
    </div>
}
