import fs from 'fs';

const exit = function (...args) {
    if (args.length) console.error(args);
    process.exit(1);
}

const getLlama = async () => {
    const request = await fetch('https://api.llama.fi/protocols');
    try {
        return request.json();
    } catch (e) {
        exit("Defillama API error: ", e);
    }
}

const llama = await getLlama();

const getPlatformList = () => {
    let list;
    try {
        list = JSON.parse(fs.readFileSync('./src/list.json'));
    } catch (e) {
        exit("./src/list.json is invalid: ", e);
    }
    return list;
}

const getDomain = (url) => {
    const regexDomain = /^(?:https?:\/\/)?(?:www\.)?([^/]+)(?:\/|$)/i;
    const match = url.match(regexDomain);
    return match?.[1];
}

const slugInjector = () => {
    const listWithSlug = [];
    const unmatchedPlatforms = [];
    const byDomain = new Map();

    for (const platform of llama) {
        if (platform.url) {
            const domain = getDomain(platform.url);
            if (!domain) return;
            byDomain.set(domain, platform);
        }
    }
    const list = getPlatformList();
    
    for (const platform of list) {
        if (platform.website) {
            const domain = getDomain(platform.website);
            if (byDomain.has(domain)) {
                const llamaPlatform = byDomain.get(domain);
                listWithSlug.push({
                    slug: llamaPlatform?.slug,
                    ...platform
                })
                continue;
            }
        }
        unmatchedPlatforms.push(platform);
    }

    return {
        listWithSlug,
        unmatchedPlatforms,
    };
}

const { listWithSlug, unmatchedPlatforms } = slugInjector();

fs.writeFileSync('./src/list.json', JSON.stringify([...listWithSlug, ...unmatchedPlatforms], null, 4));

console.log(
    '🔍 Unmatched platforms:',
    unmatchedPlatforms.map(platform => `${platform.name} ${platform.website}`)
);
