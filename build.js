import * as fs from 'fs';
import ejs from 'ejs';
import ColorHash from 'color-hash';
import Ajv from "ajv";
import addFormats from "ajv-formats";
import betterAjvErrors from 'better-ajv-errors';

const ajv = new Ajv({allErrors: true});
addFormats(ajv);

const shuffle = raw =>
      raw.map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

const list = shuffle(JSON.parse(fs.readFileSync('./list.json')));

// validate
const schema = JSON.parse(
    fs.readFileSync('./schema.json')
);
const validate = ajv.compile(schema);

const valid = ajv.validate(schema, list);

if (!valid) {
    const output = betterAjvErrors(schema, list, validate.errors, { format: 'cli', indent: 2});
    console.log(output);
    process.exit(1);
} else {
    console.log("valid according to the schema");
}

const template = fs.readFileSync('./template.ejs').toString();
const colorHash = new ColorHash.default({ lightness: [0.8, 0.9] });

console.log('entries total:', list.length);

const domains = new Set(list.map(e => e.website.split('/')[2]));

if (list.length != domains.size) {
    throw "Duplicate entries";
}

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
