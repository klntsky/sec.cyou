export const blurEditLink = (editLinkRef: React.RefObject<HTMLAnchorElement>, isBlur: boolean) => {
    const editLinkEl = editLinkRef.current
    if (isBlur) {
        editLinkEl?.classList.add('blured')
        return
    }
    editLinkEl?.classList.remove('blured')
}
