import { cardFoldedFields } from ".";
import { faGithub, faTwitter, faTelegram, faMedium, faDiscord, type IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { faInfoCircle, faDiagramProject } from '@fortawesome/free-solid-svg-icons'

type FieldIconSettings = {
    faIcon: IconDefinition
    color?: string
    title?: string
}

export const unfoldedFieldIconSettings: Partial<Record<(typeof cardFoldedFields)[number], FieldIconSettings>> = {
    github: {
        faIcon: faGithub,
    },
    twitter: {
        faIcon: faTwitter,
        color: '#1DA1F2',
        title: 'Twitter',
    },
    telegram: {
        faIcon: faTelegram,
        color: '#2AABEE',
        title: 'Telegram',
    },
    docs: {
        faIcon: faInfoCircle,
        title: 'Docs',
    },
    discord: {
        faIcon: faDiscord,
        color: '#5865F2',
        title: 'Discord',
    },
    medium: {
        faIcon: faMedium,
        title: 'Medium',
    },
    roadmap: {
        faIcon: faDiagramProject,
        title: 'Roadmap',
    },
};
