export const getDomain = (url) => {
    const regexDomain = /^(?:https?:\/\/)?(?:www\.)?([^/]+)(?:\/|$)/i;
    const match = url.match(regexDomain);
    return match?.[1];
}

export default getDomain;
