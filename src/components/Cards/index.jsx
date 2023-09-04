import { Card } from '../Card';

export const Cards = ({ list, onClickTag, onClickChain }) => list.map(platform => {
    return <Card
        data={platform}
        key={platform.name}
        onClickTag={onClickTag}
        onClickChain={onClickChain}
    />
})
