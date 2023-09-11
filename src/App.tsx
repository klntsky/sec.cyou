import { useState } from 'react';

import { Filter } from './components/Filter';
import { Cards } from './components';
import { tagColorsContext } from './contexts/tagColors'
import { tagsAndChains } from './helpers/getTagsAndChains'
import { FilterContextProvider } from './contexts/filter'

import { list, Platform } from './list';

export const App = () => {
    const [filteredList, setFilteredList] = useState(list);
    const {colorsByTag, chainList, filterTags } = tagsAndChains;

    // TODO: remove variable
    const onUpdateFilter = (filteredList: Platform[]) => setFilteredList(filteredList);

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
                    onClickTag={(value: string) => onClickCardFilter('tags', value)}
                    onClickChain={(value: string) => onClickCardFilter('chains', value)}
                />
            </tagColorsContext.Provider>
        </FilterContextProvider>
    )
};
