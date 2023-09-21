const getDomain = (await import('./getDomain.js')).default;

export const slugInjector = (llama, platformList) => {
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

    for (const platform of platformList) {
        if (platform.website) {
            const domain = getDomain(platform.website);
            if (byDomain.has(domain)) {
                const llamaPlatform = byDomain.get(domain);
                listWithSlug.push({
                    slug: llamaPlatform?.slug,
                    ...platform
                });
                continue;
            }
        }
        unmatchedPlatforms.push(platform);
    }

    return {
        listWithSlug,
        unmatchedPlatforms,
    };
};

export default slugInjector;
