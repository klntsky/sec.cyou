import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { useTagColors } from '../../contexts/tagColors';
import { classNameByObject } from '../../helpers/classNameByObject';
import { tooltipsByTag } from './constants/tooltipsByTag';
import { tooltipTextMock } from './constants/tooltipTextMock';
import { isAppRendered } from '../../helpers/isAppRendered';

import './style.css';

export const Tag = ({ isActive, isFiltered, onClick, children }) => {
    const tagColors = useTagColors();
    const tooltipText = tooltipsByTag[children] || tooltipTextMock;

    const tagBlock = (
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

    // Build time problem: https://github.com/atomiks/tippyjs-react/issues/381
    if (!isAppRendered())
        return tagBlock;

    return (
        <Tippy content={tooltipText} delay={100} className="tag-tooltip">
            {tagBlock}
        </Tippy>
    )
}
