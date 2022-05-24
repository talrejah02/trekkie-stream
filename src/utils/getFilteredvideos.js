export const getFilteredvideos = (state,videoList) => {
    const { categories, search, sort } = state
    
    let filteredData = categories.length>1 ? [...videoList.filter((video) => categories.includes(video.categoryName))] : [...videoList]
    filteredData = search.length ? [...filteredData.filter((video) => video.title.toLowerCase().includes(search.toLowerCase()))] : [...filteredData]
    if (sort === "latest") {
        filteredData = sort.length ? [...filteredData.sort((a, b) => new Date(b.created) - new Date(a.created))] : [...filteredData]
    } else {
        return[...filteredData]
    }
    return [...filteredData]
}