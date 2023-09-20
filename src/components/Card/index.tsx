import { useState, useRef, type MouseEvent, type HTMLAttributes } from 'react';
import classnames from 'classnames';

import { Tag, Chain, MaxLeverage, UnfoldedFieldIcons } from '../';
import { useFilter, type Filter, defaultFilter } from '../../contexts/filter'
import type { Platform } from '../../list';
import { useClickOutside } from '../../hooks'

import './style.css';

export type CardProps = {
    data: Platform,
    style?: HTMLAttributes<HTMLDivElement>['style']
    onClick: (name: string) => void,
};

export const Card = ({ data, style, onClick }: CardProps) => {
    const [filter, setFilter] = useFilter();
    const [isFullView, setIsFullView] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const onClickCard = () => {
        setIsFullView(!isFullView);
        onClick(data.name);
        setTimeout(
            () => {
                if (!isFullView) return;
                cardRef.current?.scrollIntoView({
                    block: 'center',
                    inline: 'center'
                })},
            100
        );
    };

    const onClickCardFilter = (field: keyof Filter, newValue: string, e: MouseEvent) => {
        e.stopPropagation();
        if (isFullView) return;
        setFilter({
            ...defaultFilter,
            [field]: (new Set(filter![field])).add(newValue)
        });
    };

    useClickOutside(cardRef, () => {
        if (isFullView) onClickCard();
    });

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
            ref={cardRef}
            className={classnames("card", { unfolded: isFullView })}
            style={style}
            onClick={onClickCard}
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
            {isFullView
                ? <UnfoldedFieldIcons {...data} />
                : null
            }
        </div>
    )
}
