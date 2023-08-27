import * as fs from 'fs';
import ejs from 'ejs';
import ColorHash from 'color-hash';

const shuffle = raw =>
      raw.map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

const list = shuffle(JSON.parse(fs.readFileSync('./list.json')));
const template = fs.readFileSync('./template.ejs').toString();
const colorHash = new ColorHash.default({ lightness: [0.8, 0.9] });

for (let entry of list) {
    for (let chain of entry.chains) {
        if (!fs.existsSync('./logos/' + chain + '.svg'))  {
            throw 'Logo does not exist for ' + chain;
        }
    }
}

fs.writeFileSync(
    'index.html',
    ejs.render(
        template,
        {
            list,
            colorHash: colorHash.hex.bind(colorHash)
        }
    )
);
