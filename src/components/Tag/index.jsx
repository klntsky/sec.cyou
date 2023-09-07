import classnames from 'classnames';

import { Tooltip, TagBlock } from '..';

import { useTagColors } from '../../contexts/tagColors';
import { tooltipsByTag } from './constants/tooltipsByTag';

import './style.css';

export const Tag = ({ isActive, isFiltered, onClick, children }) => {
    const tagColors = useTagColors();
    const tooltipText = tooltipsByTag[children];

    return (
        <Tooltip
            content={tooltipText}
            delay={300}
            className="tag-tooltip"
            interactive={true}
            interactiveDebounce={500}
        >
            <TagBlock
                className={classnames({ isBlackedOut: !isActive && isFiltered })}
                backgroundColor={tagColors[children.toLowerCase()]}
                onClick={onClick}
            >
                {children}
            </TagBlock>
        </Tooltip>
    )
}
