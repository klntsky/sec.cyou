import { useState } from 'react';

import { Filter } from './components/Filter';
import { Cards } from './components';
import { tagColorsContext } from './contexts/tagColors'
import { getTagsAndChains } from './helpers/getTagsAndChains'
import { FilterContextProvider } from './contexts/filter'

import list from './list.json';

export const App = () => {
    const [filteredList, setFilteredList] = useState(list);
    const {colorsByTag, chainList, filterTags } = getTagsAndChains();

    const onUpdateFilter = (filteredList) => setFilteredList(filteredList);

    return (
        <FilterContextProvider>
            <tagColorsContext.Provider value={colorsByTag}>
                <Filter
                    data={list}
                    tags={filterTags}
                    chains={chainList}
                    onUpdate={onUpdateFilter}
                />
                <Cards
                    list={filteredList}
                    onClickTag={(value) => onClickCardFilter('tags', value)}
                    onClickChain={(value) => onClickCardFilter('chains', value)}
                />
            </tagColorsContext.Provider>
        </FilterContextProvider>
    )
};
