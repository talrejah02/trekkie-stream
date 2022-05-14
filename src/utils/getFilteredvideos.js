export const getFilteredvideos = (state,videoList) => {
    const { categories } = state
    let filteredData = categories.length?[...videoList.filter((video) => categories.includes(video.categoryName))] : [...videoList]
    return [...filteredData]
}