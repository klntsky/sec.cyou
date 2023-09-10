import { forwardRef } from 'react';
import classnames from 'classnames'

import './style.css';

export const TagBlock = forwardRef(({ backgroundColor, className, onClick, children }, ref) => {
    return (
        <span
            className={classnames('tag', className)}
            style={{ backgroundColor }}
            ref={ref}
            onClick={onClick}
        >
            {children}
        </span>
    )
})
