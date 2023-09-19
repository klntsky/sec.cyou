import { Card } from '..';
import type { Platform } from '../../list';

import './style.css';

type CardsProps = {
    list: Platform[],
};

export const Cards = (
    { list }: CardsProps
) => {
    if (!list.length)
        return <div className="nothing-found">Nothing found</div>

    return list.map((platform: Platform) => (
        <Card
            data={platform}
            key={platform.name}
        />
    ))
}
