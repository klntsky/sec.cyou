import { useState } from 'react';
import classnames from 'classnames';

import { Tag, Chain, MaxLeverage, UnfoldedFieldIcons } from '../';
import { useFilter, type Filter, defaultFilter } from '../../contexts/filter'
import type { Platform } from '../../list';

import './style.css';

export type CardProps = {
    data: Platform,
};

export const Card = ({ data }: CardProps) => {
    const [filter, setFilter] = useFilter();
    const [isUnfolded, setIsUnfolded] = useState(false);

    const onClickCardFilter = (field: keyof Filter, newValue: string) => {
        setFilter({
            ...defaultFilter,
            [field]: (new Set(filter![field])).add(newValue)
        });
    };

    const Chains = () => data.chains.map(chain =>
        <Chain
            name={chain}
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

    return (
        <div
            className={classnames("card", { unfolded: isUnfolded })}
            onClick={() => setIsUnfolded(!isUnfolded)}
        >
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
            {isUnfolded
                ? <UnfoldedFieldIcons {...data} />
                : null
            }
        </div>
    )
}
