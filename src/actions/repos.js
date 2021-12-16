import axios from "axios";
import {setIsFetching, setRepos} from "../reducers/reposReducer";

export const getRepos = (query, currentPage, perPage) => {
    if (query === "") {
        query = "stars"
    }
    return async (dispatch) => {
        dispatch(setIsFetching(true));
            const response = await axios.get(`https://api.github.com/search/repositories?q=${query}&page=${currentPage}&per_page=${perPage}&sort=stars`);
        dispatch(setRepos(response.data));
        dispatch(setIsFetching(false));

    }
}