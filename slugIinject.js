import fs from 'fs';
import getLlama from './helpers/getLlama.js'
import { getPlatformList } from './helpers/getPlatformList.js'
import { slugInjector } from './helpers/slugInjector.js'

const llama = await getLlama();
const list = getPlatformList();

const { listWithSlug, unmatchedPlatforms } = slugInjector(llama, list);

fs.writeFileSync('./src/list.json', JSON.stringify([...listWithSlug, ...unmatchedPlatforms], null, 4));

console.log(
    '🔍 Unmatched platforms:',
    unmatchedPlatforms.map(platform => `${platform.name} ${platform.website}`)
);
