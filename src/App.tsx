import { useState } from 'react';

import { Cards, Filter } from './components';
import { tagColorsContext } from './contexts/tagColors'
import { tagsAndChains } from './helpers/getTagsAndChains'
import { FilterContextProvider } from './contexts/filter'

import { list, Platform } from './list';

export const App = () => {
    const [filteredList, setFilteredList] = useState(list);
    const [isCardSelected, setIscardSelected] = useState(false);
    const { colorsByTag, chainList, filterTags } = tagsAndChains;

    // TODO: remove variable
    const onUpdateFilter = (filteredList: Platform[]) => setFilteredList(filteredList);

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
                    onClickCard={setIscardSelected}
                />
            </tagColorsContext.Provider>
        </FilterContextProvider>
    )
};
