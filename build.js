import fs from 'fs';
import Ajv from "ajv";
import addFormats from "ajv-formats";
import betterAjvErrors from 'better-ajv-errors';

const ajv = new Ajv({allErrors: true});
addFormats(ajv);

const shuffle = raw =>
      raw.map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

let list;

try {
    list = shuffle(JSON.parse(fs.readFileSync('./src/list.json')));
} catch (e) {
    console.error("./src/list.json is invalid: ", e);
    process.exit(1);
}

// validate
const schema = JSON.parse(
    fs.readFileSync('./schema.json')
);
const validate = ajv.compile(schema);

const valid = ajv.validate(schema, list);

if (!valid) {
    const output = betterAjvErrors(schema, list, validate.errors, { format: 'cli', indent: 2});
    console.log(output);
    console.log("❌ src/list.json is invalid according to the schema");
    process.exit(1);
} else {
    console.log("✅ src/list.json is valid according to the schema");
}

console.log('ℹ️  entries total:', list.length);

const domains = new Set(list.map(e => e.website.split('/')[2]));

if (list.length != domains.size) {
    throw "Duplicate entries";
}

for (let entry of list) {
    for (let chain of entry.chains) {
        if (!fs.existsSync(`./src/assets/logos/${chain}.svg`))  {
            throw `Logo does not exist for ${chain}`;
        }
    }
}

const template = fs.readFileSync('./dist/static/index.html', 'utf-8');
const render = (await import('./dist/server/entry-server.js')).SSRRender;

(async () => {
    const appHtml = render();
    const html = template.replace('<!--app-html-->', appHtml);
    fs.writeFileSync('./dist/static/index.html', html);
})();
