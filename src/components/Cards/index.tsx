import { Dispatch } from 'react';
import { Card } from '../Card';
import { Platform } from '../../list';

type CardsProps = {
    list: Platform[],
    onClickTag: Dispatch<string>,
    onClickChain: Dispatch<string>,
};

export const Cards = ({ list, onClickTag, onClickChain }) => list.map((platform: Platform) => {
    return <Card
        data={platform}
        key={platform.name}
        onClickTag={onClickTag}
        onClickChain={onClickChain}
    />
})
