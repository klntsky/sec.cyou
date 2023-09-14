import classnames from 'classnames';
import { Dispatch } from 'react';
import { Tag, Chain, MaxLeverage } from '../';
import { useFilter, Filter, defaultFilter } from '../../contexts/filter'
import { Platform } from '../../list';

import './style.css';

export type FilterField = keyof Filter;

export type CardProps = {
    data: Platform,
};

export const Card = ({ data }: CardProps) => {
    const [filter, setFilter] = useFilter();

    const onClickCardFilter = (field: keyof Filter, newValue: string) => {
        setFilter({
            ...defaultFilter,
            [field]: (new Set(filter[field])).add(newValue)
        });
    };

    const Chains = () => data.chains.map(chain =>
        <Chain
            name={chain as any}
            key={chain}
            onClick={() => onClickCardFilter('chains', chain)}
            className={'card-chain-logo'}
        />);

    const Tags = () => data.tags.map(tag =>
        <Tag
            key={tag}
            isActive={true}
            isFiltered={false}
            onClick={() => onClickCardFilter('tags', tag)}
        >
            {tag}
        </Tag>)

    return <div className="card">
        <div className="card-contents">
            <div className='card-header'>
                <a className="card-link" href={data.website} target="_blank">
                    <span className="card-name">
                        {data.name}
                        <img src="./assets/link.svg" className="link-icon" alt="" />
                    </span>
                </a>
                <span className="card-chains">
                    <Chains />
                </span>
            </div>
            <div className="card-description">
                {data.description}
            </div>
            <div className={classnames("card-tags", { isMaxLeverage: data.maxLeverage })}>
                <Tags />
            </div>
        </div>
        <MaxLeverage maxLeverage={data.maxLeverage} leverageInfo={data.leverageInfo} className="max-leverage" />
    </div>
}
