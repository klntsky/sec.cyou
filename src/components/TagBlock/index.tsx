import { forwardRef } from 'react';
import classnames from 'classnames'

import './style.css';

type TagBlockProps = {
    backgroundColor: string,
    className: string,
    onClick(): void,
    children: string[]
}

export const TagBlock = forwardRef<HTMLSpanElement, TagBlockProps>(({ backgroundColor, className, onClick, children }, ref) => {
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
