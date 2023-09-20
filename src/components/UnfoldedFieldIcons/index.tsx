import { type ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import type { Platform } from '../../list';
import { cardFoldedFields, unfoldedFieldIconSettings } from './constants';

import './style.css'

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
                    className='icon-link'
                    onClick={e => e.stopPropagation()}
                >
                    <FontAwesomeIcon
                        icon={iconSettings.faIcon}
                        color={iconSettings.color}
                        title={iconSettings.title || field}
                        className='icon'
                    />
                    {iconSettings.title || field}
                </a>
            )
    })

    return <div className='card-unfolded-content'>
        <div className='links'>
            {icons.length
                ? icons
                : 'Nothing'
            }
        </div>
    </div>
}