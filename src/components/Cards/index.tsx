import { useState, useEffect } from 'react';

import { Card, Pagination } from '..';
import type { Platform } from '../../list';

import './style.css';

type CardsProps = {
    list: Platform[],
    onClickCard: (isSelected: boolean) => void,
};

export const Cards = (
    { list, ...props }: CardsProps
) => {
    const [selectedCard, setSelectedCard] = useState<string>();
    const [page, setPage] = useState(1);
    const cardOnPage = 20;
    const isPaginated = list.length > cardOnPage;
    const pagesTotal = Math.ceil(list.length / cardOnPage);
    const sliceStart = (page - 1) * cardOnPage;
    const sliceEnd = sliceStart + cardOnPage;

    const onClickCard = (name: string) => {
        const isNew = name !== selectedCard;
        setSelectedCard(isNew
            ? name
            : undefined);
        props.onClickCard(isNew);
    }

    useEffect(() => {
        setPage(1);
    }, [list]);

    if (!list.length)
        return <div className="nothing-found">Nothing found</div>

    return <div className="cards-block">
        <div className="cards">
            {list.slice(sliceStart, sliceEnd).map((platform: Platform) => (
                <Card
                    style={selectedCard
                        ? selectedCard === platform.name
                            ? undefined
                            : { display: 'none' }
                        : undefined
                    }
                    data={platform}
                    key={platform.name}
                    onClick={onClickCard}
                />
            ))}
        </div>
        {isPaginated
            ? <Pagination
                page={page}
                pagesAtTime={9}
                pagesTotal={pagesTotal}
                className={selectedCard ? 'blured' : undefined}
                onChangePage={setPage}
            />
            : null
        }
    </div>
}
