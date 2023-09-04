import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { useTagColors } from '../../contexts/tagColors';
import { classNameByObject } from '../../helpers/classNameByObject';
import { tooltipsByTag } from './constants/tooltipsByTag'
import { tooltipTextMock } from './constants/tooltipTextMock'

import './style.css';

export const Tag = ({ isActive, isFiltered, onClick, children }) => {
    const tagColors = useTagColors();
    const tooltipText = tooltipsByTag[children] || tooltipTextMock;

    return (
        <Tippy content={tooltipText} delay={100} className="tag-tooltip">
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
        </Tippy>
    )
}
