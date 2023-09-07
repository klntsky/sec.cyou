export const isAppRendered = () =>
    typeof document !== 'undefined'
    && document.getElementById('container').hasChildNodes();
