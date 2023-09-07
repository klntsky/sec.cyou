export const removeUrlHash = () => { 
    history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search
    );
}
