export const paginationCreator = (pagesButtons, currentPage, reposCount, reposPerPage, buttonsPerPage) => {
    const buttonsTotal = Math.ceil(reposCount / reposPerPage);
    // if all pages buttons > than buttonsPerPage const then we create an array with buttonsPerPage number elements
    if (buttonsTotal > buttonsPerPage) {
        if (currentPage > Math.floor(buttonsPerPage / 2)) { // if our current button is far more than the center of the row
            for (let i = currentPage - Math.floor(buttonsPerPage / 2); i < currentPage + Math.ceil(buttonsPerPage / 2); i++) {
                pagesButtons.push(i);
            }
        } else {
            for (let i = 1; i <= buttonsPerPage; i++) {
                pagesButtons.push(i);
            }
        }
    }
    else {
        for (let i = 1; i <= buttonsTotal; i++) {
            pagesButtons.push(i);
        }
    }
    return pagesButtons;
}