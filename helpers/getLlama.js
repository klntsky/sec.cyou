const exit = (await import('./exit.js')).default;

export const getLlama = async () => {
    const request = await fetch('https://api.llama.fi/protocols');
    try {
        return request.json();
    } catch (e) {
        exit("Defillama API error: ", e);
    }
};

export default getLlama;
