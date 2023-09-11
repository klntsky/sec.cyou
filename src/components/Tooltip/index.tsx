import Tippy from '@tippyjs/react';
import { hideAll } from 'tippy.js'
import 'tippy.js/dist/tippy.css';

import { isAppRendered } from '../../helpers/isAppRendered';

export const Tooltip = (
    { children, content, ...props } :
    { children: any, content: boolean | undefined, props: any }
) => {
    // Build time problem: https://github.com/atomiks/tippyjs-react/issues/381
    if (!isAppRendered() || !content)
        return children;

    return (
        <Tippy
            {...props}
            onShow={() => hideAll({ duration: 0 })}
        >
            {children}
        </Tippy>
    )
}
