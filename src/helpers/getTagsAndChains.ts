import ColorHash from 'color-hash';

import { list, Platform } from '../list';

const colorHashParams = { lightness: [0.8, 0.9] };
const colorHash = typeof ColorHash == 'function' ?
    // @ts-expect-error this is to overcome ESM -> CJS import problems
    new ColorHash(colorHashParams) : new ColorHash.default(colorHashParams);
const colorsByTag: Map<string, string> = new Map();
const chainList: Set<string> = new Set();
const filterTags: Set<string> = new Set();

list.forEach((platform: Platform) => {
    platform.tags.forEach(tag => {
        const tagLowerCase = tag.toLowerCase();
        if (tagLowerCase === 'ecosystem' || tagLowerCase.search('ecosystem') === -1) filterTags.add(tag);
        if (colorsByTag.has(tagLowerCase)) return;
        colorsByTag.set(tagLowerCase, colorHash.hex(tagLowerCase));
    });
    platform.chains.forEach(chain => chainList.add(chain));
});

export const tagsAndChains = {
    colorsByTag,
    chainList,
    filterTags,
};
