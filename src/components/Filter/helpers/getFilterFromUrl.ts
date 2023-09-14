import { serializationStringForURI } from '.'

export const getFilterFromUrl = (
    { tags, chains } :
    { tags: Set<string>, chains: Set<string> }
): { chains: Set<string>, tags: Set<string> } => {
    const hash = location.hash.replace('#', '');

    const res = {
        tags: new Set<string>(),
        chains: new Set<string>()
    };

    if (!hash)
        return res;

    const serializedTags: Map<string, string> = new Map(Array.from(tags).map(x => [serializationStringForURI(x), x]));
    const serializedChains: Map<string, string> = new Map(Array.from(chains).map(x => [serializationStringForURI(x), x]));

    hash.split(',').forEach(piece => {
        if (serializedTags.has(piece)) {
            res.tags.add(serializedTags.get(piece)!);
            return;
        }
        if (serializedChains.has(piece)) {
            res.chains.add(serializedChains.get(piece)!);
        }
    });

    return res;
}
