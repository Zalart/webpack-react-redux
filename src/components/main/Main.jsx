import React, {useEffect, useState} from 'react';
import './main.less'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../../actions/repos";
import Repo from "./repo/Repo";
import {setCurrentPage} from "../../reducers/reposReducer";

const Main = () => {
const dispatch = useDispatch();
const repos = useSelector(state => state.repos.items);
const isFetching = useSelector(state=>state.repos.isFetching);
const currentPage = useSelector(state=> state.repos.currentPage);
const totalCount = useSelector(state=> state.repos.totalCount);
const perPage = useSelector(state=> state.repos.perPage);
const [searchValue, setSearchValue] = useState("");


const pagesCalc = (currentPage, perPage, totalCount) => {
    let arr = [];
    if (currentPage < Math.ceil(totalCount / perPage)) {
        for (let i = 1; i <= perPage; i++ ) {
            arr.push(i);
        }
        return arr;
    } else if (currentPage < Math.ceil(totalCount / perPage) - Math.floor(perPage / 2)) {
        for (let i = currentPage - Math.floor(perPage / 2); i <= currentPage + Math.floor(perPage / 2); i++ ) {
            arr.push(i);
        }
        return arr;
    }
    else {

    }
}

const pages = pagesCalc(currentPage, perPage, totalCount);

const handleChangeValue = e => {
    setSearchValue(e.target.value);
}
const handleSearchClick = () => {
    dispatch(setCurrentPage(1));
    dispatch(getRepos(searchValue, currentPage, perPage));
}
useEffect(()=> {
    dispatch(getRepos(searchValue, currentPage, perPage));
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