import { ReactElement } from 'react'
import Tippy from '@tippyjs/react';
import { hideAll } from 'tippy.js'
import 'tippy.js/dist/tippy.css';

import { isAppRendered } from '../../helpers/isAppRendered';

export const Tooltip = (
    { children,
      content,
      delay,
      className,
      interactive } :
    { children: ReactElement,
      content: string,
      delay: number,
      className: string,
      interactive: boolean }
) => {
    // Build time problem: https://github.com/atomiks/tippyjs-react/issues/381
    if (!isAppRendered() || !content)
        return children;

    return (
        <Tippy
            content={content}
            delay={delay}
            className={className}
            interactive={interactive}
            onShow={() => hideAll({ duration: 0 })}
        >
            {children}
        </Tippy>
    )
}
