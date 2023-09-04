import { useTagColors } from '../../contexts/tagColors';
import { classNameByObject } from '../../helpers/classNameByObject';

import './style.css';

export const Tag = ({ isActive, isFiltered, onClick, children }) => {
    const tagColors = useTagColors();

    return (
        <span
            className={classNameByObject({
                tag: true,
                isActive,
                isBlackedOut: !isActive && isFiltered,
            })}
            style={{
                backgroundColor: tagColors[children.toLowerCase()]
            }}
            onClick={onClick}
        >
            {children}
        </span>
    )
}
