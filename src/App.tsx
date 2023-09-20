import { useState, useRef } from 'react';

import { Cards, Filter } from './components';
import { tagColorsContext } from './contexts/tagColors'
import { tagsAndChains } from './helpers/getTagsAndChains'
import { blurEditLink } from './helpers/blurEditLink'
import { FilterContextProvider } from './contexts/filter'

import { list, Platform } from './list';

export const App = () => {
    const [filteredList, setFilteredList] = useState(list);
    const [isCardSelected, setIscardSelected] = useState(false);
    const editLinkRef = useRef<HTMLAnchorElement>(null);
    const { colorsByTag, chainList, filterTags } = tagsAndChains;

    // TODO: remove variable
    const onUpdateFilter = (filteredList: Platform[]) => setFilteredList(filteredList);

    const onClickCard = (isSelected: boolean) => {
        setIscardSelected(isSelected);
        blurEditLink(editLinkRef, isSelected);
    }

    return (
        <FilterContextProvider>
            <tagColorsContext.Provider value={colorsByTag}>
                <Filter
                    data={list}
                    tags={filterTags}
                    chains={chainList}
                    className={isCardSelected ? 'blured' : undefined}
                    onUpdate={onUpdateFilter}
                />
                <Cards
                    list={filteredList}
                    onClickCard={onClickCard}
                />
            </tagColorsContext.Provider>
            <a
                id="edit-link"
                target="_blank"
                href="https://github.com/klntsky/sec.cyou/blob/master/src/list.json"
                ref={editLinkRef}
            >
                EDIT THIS LIST
            </a>
        </FilterContextProvider>
    )
};
