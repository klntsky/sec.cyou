import { useEffect } from 'react';
import fuzzysort from 'fuzzysort';
import { Tag, ChainTag } from '../';
import { toogleTrueOrDeleteByObjectKey } from '../../helpers/toogleTrueOrDeleteByObjectKey'
import { defaultFilterData } from './consts/defaultFilterData'
import { useFilter } from '../../contexts/filter'
import { getFilterFromUrl, sendFilterToUri } from './helpers'

import './style.css';

export const Filter = ({ data, tags, chains, onUpdate }) => {
    const { filter, setFilter } = useFilter();

    const onChangeFilter = (field, updatedValue) => {
        setFilter(prevFilter => {
            const newValue = field === 'text'
                ? updatedValue
                : toogleTrueOrDeleteByObjectKey(prevFilter[field], updatedValue)
            return {
                ...prevFilter,
                [field]: newValue
            }
        });
    }

    const onReset = () => setFilter(defaultFilterData());

    useEffect(() => {
        if (!filter) return;

        let filtered = data;

        const filteredTags = Object.keys(filter.tags);
        if (filteredTags.length)
            filtered = filtered.filter(platform => filteredTags.some(filteredTag => {
                if (filteredTag === 'ecosystem')
                    return platform.tags.some(tag => tag.search('ecosystem') !== -1);
                return platform.tags.includes(filteredTag);
            }));

        const filteredChains = Object.keys(filter.chains);
        if (filteredChains.length)
            filtered = filtered.filter(platform => filteredChains.some(filteredChain => platform.chains.includes(filteredChain)))

        if (filter.text) {
            const fuzzyResult = fuzzysort.go(filter.text, filtered, { keys: ['name', 'description', 'website'] });
            if (fuzzyResult)
                filtered = fuzzyResult.map(fuzziedObj => fuzziedObj.obj)
        }

        sendFilterToUri({ filteredTags, filteredChains });
        onUpdate(filtered);
    }, [filter]);

    useEffect(() => {
        const initFilterData = getFilterFromUrl({ tags, chains }, defaultFilterData());

        setFilter(initFilterData || defaultFilterData());
    }, [])

    if (!filter) return null;

    return <div id="filter">
        <div className="search-tags">
            <div className="tags">
                {Object.keys(tags).map(tagName =>
                    <Tag
                        isActive={filter.tags[tagName]}
                        isFiltered={Object.keys(filter.tags).length}
                        key={tagName}
                        onClick={() => onChangeFilter('tags', tagName)}
                    >{tagName}</Tag>
                )}
            </div>
        </div>
        <div className="search-chains">
            <div className='chains'>
                {chains.map(chainName =>
                    <ChainTag
                        isActive={filter.chains[chainName]}
                        isFiltered={Object.keys(filter.chains).length}
                        name={chainName}
                        onClick={() => onChangeFilter('chains', chainName)}
                        key={chainName}
                    />
                )}
            </div>
        </div>
        {Object.keys(filter.tags).length || Object.keys(filter.chains).length || filter.text
            ? <span id="clear-filter" onClick={onReset}>[reset]</span>
            : null
        }
        <div id="filter-input-container">
          <input
            id="filter-input"
            placeholder="Search Platforms..."
            value={filter.text}
            onChange={event => onChangeFilter('text', event.target.value)}
          />
        </div>
    </div>
}
