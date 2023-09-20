export const blurEditLink = (isBlur: boolean) => {
    const editLinkEl = document.getElementById('edit-link')
    if (isBlur) {
        editLinkEl?.classList.add('blured')
        return
    }
    editLinkEl?.classList.remove('blured')
}
