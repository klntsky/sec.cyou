import colorHashModule from 'color-hash';

import { isAppRendered } from './isAppRendered';

import list from '../list.json';

const ColorHash = isAppRendered()
    ? colorHashModule
    : colorHashModule.default;

export const getTagsAndChains = () => {
    const colorHash = new ColorHash({ lightness: [0.8, 0.9] });
    const colorsByTag = {};
    const chainList = new Set();
    const filterTags = {};

    list.forEach(platform => {
        platform.tags.forEach(tag => {
            const tagLowerCase = tag.toLowerCase();
            if (tagLowerCase === 'ecosystem' || tagLowerCase.search('ecosystem') === -1) filterTags[tag] = null;
            if (tagLowerCase in colorsByTag) return;
            colorsByTag[tagLowerCase] = colorHash.hex(tagLowerCase);
        });
        platform.chains.forEach(chain => chainList.add(chain));
    });

    return {
        colorsByTag,
        chainList: [...chainList],
        filterTags,
    }
}
