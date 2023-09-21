import fs from 'fs';

const exit = (await import('./exit.js')).default;

export const getPlatformList = () => {
    let list;
    try {
        list = JSON.parse(fs.readFileSync('./src/list.json'));
    } catch (e) {
        exit("./src/list.json is invalid: ", e);
    }
    return list;
};

export default getPlatformList;
