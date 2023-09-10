import { serializationStringForURI } from '.'

export const getFilterFromUrl = ({ tags, chains }, intialFilter) => {
    const hash = location.hash.replace('#', '');
    if (!hash)
        return false

    const entities = hash.split(',')
    const filterFromUrl = entities.reduce((filterAcc, entity) => {
        const tagFromUrl = Object.keys(tags).find(tag => entity === serializationStringForURI(tag))
        if (tagFromUrl) {
            filterAcc.tags[tagFromUrl] = true;
            return filterAcc;
        }

        const chainFromUrl = chains.find(chain => entity === serializationStringForURI(chain))
        if (chainFromUrl) {
            filterAcc.chains[chainFromUrl] = true;
        }

        return filterAcc;
    }, intialFilter)

    return filterFromUrl;    
}
