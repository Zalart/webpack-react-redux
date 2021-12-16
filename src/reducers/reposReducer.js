const SET_REPOS = "SET_REPOS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
// const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

const defaultState = {
    items: [],
    isFetching: true,
    currentPage: 1,
    perPage: 9,
    totalCount: 0,
}

export default function reposReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_REPOS:
            return {...state, items: action.payload.items, isFetching: false, totalCount: action.payload.total_count}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        case SET_IS_FETCHING:
            return {...state, isFetching: action.payload}
        default:
            return state
    }
}


//Action creators
export const setRepos = (repos) => ({type: SET_REPOS, payload: repos});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, payload: isFetching})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, payload: currentPage})
// export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, payload: totalCount})
