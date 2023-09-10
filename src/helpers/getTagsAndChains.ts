import ColorHash from 'color-hash';

import { isAppRendered } from './isAppRendered';

import { list, Platform } from '../list';

export const getTagsAndChains = () => {
    const colorHash = new ColorHash({ lightness: [0.8, 0.9] });
    const colorsByTag: Map<string, string> = new Map();
    const chainList = new Set();
    const filterTags = new Map<string, null>();

    list.forEach((platform: Platform) => {
        platform.tags.forEach(tag => {
            const tagLowerCase = tag.toLowerCase();
            if (tagLowerCase === 'ecosystem' || tagLowerCase.search('ecosystem') === -1) filterTags.set(tag, null);
            if (colorsByTag.has(tagLowerCase)) return;
            colorsByTag.set(tagLowerCase, colorHash.hex(tagLowerCase));
        });
        platform.chains.forEach(chain => chainList.add(chain));
    });

    return {
        colorsByTag,
        chainList: [...chainList],
        filterTags,
    }
}
