import { useState, type MouseEvent, type HTMLAttributes } from 'react';
import classnames from 'classnames';

import { Tag, Chain, MaxLeverage, UnfoldedFieldIcons } from '../';
import { useFilter, type Filter, defaultFilter } from '../../contexts/filter'
import type { Platform } from '../../list';

import './style.css';

export type CardProps = {
    data: Platform,
    style?: HTMLAttributes<HTMLDivElement>['style']
    onClick: (name: string) => void,
};

export const Card = ({ data, style, onClick }: CardProps) => {
    const [filter, setFilter] = useFilter();
    const [isUnfolded, setIsUnfolded] = useState(false);

    const onClickCard = (event: MouseEvent<HTMLDivElement>) => {
        setIsUnfolded(!isUnfolded);
        onClick(data.name);
        setTimeout(
            () => (event.target as Element).scrollIntoView({
                block: 'center',
                inline: 'center'
            }),
            100
        );
    };

    const onClickCardFilter = (field: keyof Filter, newValue: string, e: MouseEvent) => {
        e.stopPropagation();
        setFilter({
            ...defaultFilter,
            [field]: (new Set(filter![field])).add(newValue)
        });
    };

    const Chains = () => data.chains.map(chain =>
        <Chain
            name={chain}
            key={chain}
            onClick={(e) => onClickCardFilter('chains', chain, e)}
            className={'card-chain-logo'}
        />);

    const Tags = () => data.tags.map(tag =>
        <Tag
            key={tag}
            isActive={true}
            isFiltered={false}
            onClick={(e) => onClickCardFilter('tags', tag, e)}
        >
            {tag}
        </Tag>)

    return (
        <div
            className={classnames("card", { unfolded: isUnfolded })}
            style={style}
            onClick={e => onClickCard(e)}
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
                <MaxLeverage maxLeverage={data.maxLeverage} leverageInfo={data.leverageInfo} className="max-leverage" />
            </div>
            {isUnfolded
                ? <UnfoldedFieldIcons {...data} />
                : null
            }
        </div>
    )
}
