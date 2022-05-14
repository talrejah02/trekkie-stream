export const filterReducer = ( state, action ) => {
    switch (action.type) {
        case "category": return{ ...state, categories: [...state.categories, action.payload] }
        default: return state
    }
    
}