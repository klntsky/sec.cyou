import { Card } from '../Card';
import { Platform } from '../../list';

type CardsProps = {
    list: Platform[],
};

export const Cards = (
    { list }: CardsProps
) => list.map((platform: Platform) => {
    return <Card
        data={platform}
        key={platform.name}
    />
})
