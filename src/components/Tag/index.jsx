import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classnames from 'classnames'

import { useTagColors } from '../../contexts/tagColors';
import { tooltipsByTag } from './constants/tooltipsByTag';
import { isAppRendered } from '../../helpers/isAppRendered';

import './style.css';

export const Tag = ({ isActive, isFiltered, onClick, children }) => {
    const tagColors = useTagColors();
    const tooltipText = tooltipsByTag[children];

    const tagBlock = (
        <span
            className={classnames('tag', { isBlackedOut: !isActive && isFiltered })}
            style={{
                backgroundColor: tagColors[children.toLowerCase()]
            }}
            onClick={onClick}
        >
            {children}
        </span>
    )

    // Build time problem: https://github.com/atomiks/tippyjs-react/issues/381
    if (!isAppRendered() || !tooltipText)
        return tagBlock;

    return (
        <Tippy content={tooltipText} delay={100} className="tag-tooltip">
            {tagBlock}
        </Tippy>
    )
}
