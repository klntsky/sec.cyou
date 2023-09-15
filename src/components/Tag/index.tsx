import classnames from 'classnames';

import { Tooltip, TagBlock } from '..';

import { useTagColors } from '../../contexts/tagColors';
import { tooltipsByTag } from './constants/tooltipsByTag';

import './style.css';

type TagArgs = {
    isActive: boolean;
    isFiltered: boolean;
    onClick: () => void;
    children: string; // keyof (typeof tooltipsByTag);
};

export const Tag = ({ isActive, isFiltered, onClick, children }: TagArgs) => {
    const tagColors = useTagColors();
    const tooltipText = tooltipsByTag[children as keyof (typeof tooltipsByTag)];
    if (typeof tooltipText !== 'string') {
        return null;
    }

    return (
        <Tooltip
            content={tooltipText}
            delay={300}
            className="tag-tooltip"
            interactive={true}
        >
            <TagBlock
                className={classnames({ isBlackedOut: !isActive && isFiltered })}
                backgroundColor={tagColors.get(children.toLowerCase()) || '#FFF'}
                onClick={onClick}
            >
                {[children]}
            </TagBlock>
        </Tooltip>
    )
}
