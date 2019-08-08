export const clearSelection = () => {
    const windowSelection = window.getSelection();
    if (!!windowSelection) {
        windowSelection.removeAllRanges();
    }
    if (document.getSelection) {
        const selection = document.getSelection();
        if (selection) {
            selection.empty();
            selection.removeAllRanges();
            selection.addRange(document.createRange());
        }
    }
}
