import fs from 'fs';
let list;

let llama = JSON.parse(fs.readFileSync('./defillama.json'));

const bySlug = new Map();

for (const entry of llama) {
    if (entry.slug) {
        bySlug.set(entry.slug, entry);
    }
}

try {
    list = JSON.parse(fs.readFileSync('./src/list.json'));
} catch (e) {
    console.error("./src/list.json is invalid: ", e);
    process.exit(1);
}

for (const entry of list) {
    if (entry.slug) {
        if (!bySlug.has(entry.slug)) {
            console.error(entry.website + ' bad slug ' + entry.slug);
        }
    }
}

fs.writeFileSync('./src/list.json', JSON.stringify(list, null, 4));
