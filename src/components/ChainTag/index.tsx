import { Chain } from "../";
import classnames from 'classnames'

import './style.css';

type ChainTagProps = {
    isActive: boolean;
    isFiltered: boolean;
    onClick: () => void;
    name: string;
}

export const ChainTag = ({ isActive, isFiltered, onClick, name }: ChainTagProps) => {
    return (
        <div
            className={classnames("chain-tag", { isBlackedOut: !isActive && isFiltered })}
            onClick={onClick}
        >
            <span className="chain-tag__name">
                {name}
            </span>
            <Chain
                onClick={() => {}}
                name={name}
                className="small"
            />
        </div>
    )
}
