import { type ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import type { Platform } from '../../list';
import { cardFoldedFields, unfoldedFieldIconSettings } from './constants';

import './style.css'
import classNames from 'classnames';

export const UnfoldedFieldIcons = (props: Platform) => {
    const icons: ReactNode[] = [];

    cardFoldedFields.forEach(field => {
        const iconSettings = unfoldedFieldIconSettings[field];
        if (!iconSettings) return;
        if (field in props)
            icons.push(
                <a
                    href={String(props[field])}
                    target="_blank"    
                >
                    <FontAwesomeIcon
                        icon={iconSettings.faIcon}
                        color={iconSettings.color}
                        title={iconSettings.title || field}
                    />
                </a>
            )
    })

    return <div className={classNames(['card-unfolded-content', { 'no-icons': !icons.length }])}>
        {icons.length
            ? icons
            : 'Nothing'
        }
    </div>
}