import { useState } from 'react';

import { Filter } from './components/Filter';
import { Cards } from './components';
import { tagColorsContext } from './hooks/useTagColors/tagColorsContext'
import { defaultFilterData } from './components/Filter/consts/defaultFilterData'
import { getTagsAndChains } from './helpers/getTagsAndChains'

import list from './list.json';

export const App = () => {
    const [filteredList, setFilteredList] = useState(list);
    const [filterData, setFilterData] = useState(defaultFilterData);
    const {colorsByTag, chainList, filterTags } = getTagsAndChains();

    const onUpdateFilter = (filteredList) => setFilteredList(filteredList);

    const onClickCardFilter = (field, newValue) => {
        setFilterData(prevFilter => {
            return {
                ...defaultFilterData,
                [field]: {
                    [newValue]: true,
                },
            }
        });
    }

    return (
        <tagColorsContext.Provider value={colorsByTag}>
            <Filter
                data={list}
                filterData={filterData}
                tags={filterTags}
                chains={chainList}
                onUpdate={onUpdateFilter}
                onUpdateFilter={(data) => setFilterData(data)}
            />
            <Cards
                list={filteredList}
                onClickTag={(value) => onClickCardFilter('tags', value)}
                onClickChain={(value) => onClickCardFilter('chains', value)}
            />
        </tagColorsContext.Provider>
    )
};
