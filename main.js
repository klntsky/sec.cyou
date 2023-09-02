var filtersEl = document.getElementById('filters');
var unfilterEl = document.getElementById('clear-filter');
var activeFilterEl = document.getElementById('active-filter');

function unfilterTags () {
    [].forEach.call(document.getElementsByClassName('item'), elem => {
        elem.style.display = '';
    });
    filtersEl.style.display = 'none';
}

Object.entries(window.tagColors)
    .sort()
    .forEach(([tag, color]) => {
        // filter out particular ecosystems
        if (tag != "ecosystem" && tag.search('ecosystem') !== -1) return;
        if (tag == 'address screening') return;

        const tagEl = document.createElement('span');
        tagEl.className = 'item-tag';
        tagEl.textContent = tag;
        tagEl.style.backgroundColor = color;
        tagEl.onClick = () => filterTags(tag);
        document.getElementById('tags').appendChild(tagEl);
        document.getElementById('tags').appendChild(document.createTextNode(' '));
    });

unfilterEl.addEventListener('click', unfilterTags);

function filterTags(tagEl) {
    const text = tagEl.textContent.toLowerCase();
    filtersEl.style.display = 'block';
    activeFilterEl.textContent = text;
    activeFilterEl.style.backgroundColor = window.tagColors[text];

    [].forEach.call(document.getElementsByClassName('item'), elem => {
        elem.style.display =
            [].some.call(
                elem.getElementsByClassName('item-tag'),
                tag => tag.textContent.toLowerCase() == text.toLowerCase()
            ) ? '' : 'none';
    });

}

[].forEach.call(document.getElementsByClassName('item-tag'), tagEl => {
    tagEl.addEventListener('click', evt => filterTags(tagEl));
});
