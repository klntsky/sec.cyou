import classname from 'classname';

import { Tag, Chain, MaxLeverage } from '../';
import { useFilter } from '../../contexts/filter'
import { defaultFilterData } from '../Filter/consts/defaultFilterData'

import './style.css';

export const Card = ({ data, onClickTag, onClickChain }) => {
    const [filter, setFilter] = useFilter();

    const onClickCardFilter = (field, newValue) => {
        setFilter(prevFilter => {
            return {
                ...defaultFilterData,
                [field]: {
                    [newValue]: true,
                },
            }
        });
    }

    const Chains = () => data.chains.map(chain =>
        <Chain
            name={chain}
            key={chain}
            onClick={() => onClickCardFilter('chains', chain)}
        />);

    const Tags = () => data.tags.map(tag =>
        <Tag
            key={tag}
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
            <div className={classname("card-tags", { isMaxLeverage: data.maxLeverage })}>
                <Tags />
            </div>
        </div>
        <MaxLeverage maxLeverage={data.maxLeverage} leverageInfo={data.leverageInfo} className="max-leverage" />
    </div>
}
