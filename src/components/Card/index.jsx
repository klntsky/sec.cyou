import { Tag, Chain } from '../';

import './style.css';

export const Card = ({ data, onClickTag, onClickChain }) => {
    const Chains = () => data.chains.map(chain => <Chain name={chain} key={chain} onClick={() => onClickChain(chain)} />);

    const Tags = () => data.tags.map(tag => <Tag key={tag} onClick={() => onClickTag(tag)}>{tag}</Tag>)

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
            <div className="card-tags">
                <Tags />
            </div>
        </div>
    </div>
}
