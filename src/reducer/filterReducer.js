export const filterReducer = ( state, action ) => {
    switch (action.type) {
        case "category": return { ...state, categories: action.payload }
        case "search": return { ...state, search: action.payload }
        case "sort":return{...state,sort:action.payload}
        default: return state
    }
    
}