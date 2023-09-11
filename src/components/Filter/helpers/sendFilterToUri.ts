import { serializationStringForURI, removeUrlHash } from '.'

export const sendFilterToUri =
    ({ filteredTags, filteredChains } :
     { filteredTags: string[], filteredChains: string[] }): void => {
    let newFilterUrl = '';
    if (filteredTags.length || filteredChains.length) {
        const newHashTags = filteredTags.map(filteredTag => serializationStringForURI(filteredTag))
        const newHashChains = filteredChains.map(filteredChain => serializationStringForURI(filteredChain))
        newFilterUrl = newHashTags.concat(newHashChains).join(',');
    }
    if (!newFilterUrl) {
        removeUrlHash();
        return;
    }
    location.hash = newFilterUrl;
}
