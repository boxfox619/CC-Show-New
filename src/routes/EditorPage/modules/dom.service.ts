export const clearSelection = () => {
    if (window.getSelection) {
        window.getSelection().removeAllRanges();
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
