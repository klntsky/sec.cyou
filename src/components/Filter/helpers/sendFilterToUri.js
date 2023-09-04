import { serializationStringForURI } from '.'

export const sendFilterToUri = ({ filteredTags, filteredChains }) => {
    let newFilterUrl = '';
    if (filteredTags.length || filteredChains.length) {
        const newHashTags = filteredTags.map(filteredTag => serializationStringForURI(filteredTag))
        const newHashChains = filteredChains.map(filteredChain => serializationStringForURI(filteredChain))
        newFilterUrl = [newHashTags.join(','), newHashChains.join(',')]
            .filter(Boolean) // To avoid usefull comma after an empty array
            .join(',');
    }
    location.hash = newFilterUrl;
}
