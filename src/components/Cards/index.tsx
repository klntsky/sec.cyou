import { useState } from 'react';

import { Card, Pagination } from '..';
import type { Platform } from '../../list';

import './style.css';

type CardsProps = {
    list: Platform[],
};

export const Cards = (
    { list }: CardsProps
) => {
    const [page, setPage] = useState(1);
    const cardOnPage = 20;
    const isPaginated = list.length > cardOnPage;
    const pagesTotal = Math.ceil(list.length / cardOnPage);
    const sliceStart = (page - 1) * cardOnPage;
    const sliceEnd = sliceStart + cardOnPage;

    if (!list.length)
        return <div className="nothing-found">Nothing found</div>

    return <div className="cards-block">
        <div className="cards">
            {list.slice(sliceStart, sliceEnd).map((platform: Platform) => (
                <Card
                    data={platform}
                    key={platform.name}
                    />
            ))}
        </div>
        {isPaginated
            ? <Pagination pagesAtTime={9} pagesTotal={pagesTotal} onChangePage={setPage} />
            : null
        }
    </div>
}
