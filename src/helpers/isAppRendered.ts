export const isAppRendered: () => boolean = () => {
    if (typeof document == 'undefined') return false;

    const elem = document.getElementById('container');
    if (elem && elem.hasChildNodes()) {
        return true;
    }

    return false;
}
