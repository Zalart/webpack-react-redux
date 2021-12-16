import React, {useEffect, useState} from 'react';
import './main.less'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../../actions/repos";
import Repo from "./repo/Repo";
import {setCurrentPage} from "../../reducers/reposReducer";
import {paginationCreator} from "../../utilities/paginationCreator";
import {BUTTONS_PER_PAGE} from "../../utilities/constants";

const Main = () => {
const dispatch = useDispatch();
const repos = useSelector(state => state.repos.items);
const isFetching = useSelector(state=>state.repos.isFetching);
const currentPage = useSelector(state=> state.repos.currentPage);
const reposCount = useSelector(state=> state.repos.totalCount);
const reposPerPage = useSelector(state=> state.repos.perPage);
const [searchValue, setSearchValue] = useState("");

const pagesButtons = [];
const pages = paginationCreator(pagesButtons, currentPage, reposCount, reposPerPage, BUTTONS_PER_PAGE)

const handleChangeValue = e => {
    setSearchValue(e.target.value);
}
const handleSearchClick = () => {
    dispatch(setCurrentPage(1));
    dispatch(getRepos(searchValue, currentPage, reposPerPage));
}
useEffect(()=> {
    dispatch(getRepos(searchValue, currentPage, reposPerPage));
}, [currentPage])

    return (
        <div>
            <div className="search"><input value={searchValue} onChange={handleChangeValue} className="search-input" type="text"/>
                <button className="btn" onClick={handleSearchClick}>Поиск</button></div>
            {!isFetching ? repos.map((repo, i) => <Repo key={i} repo={repo}/>) : <div className="fetching"><span>Loading</span></div>}
            <div className="pagination">
                {pages && pages.map((page, index) =>
                    <span className={currentPage === page ? "page-active" : "page"}
                          key={index} onClick={()=>dispatch(setCurrentPage(page))}>{page}
                    </span>)}
            </div>
        </div>
    );
};

export default Main;