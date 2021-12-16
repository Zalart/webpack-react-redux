import React from 'react';
import './app.less'
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Main from "./main/Main";
import RepoListItem from "./main/repo/repoListItem/RepoListItem";
import RepoCard from "./main/repo/repoCard/RepoCard";

const App = () => {
    const dispatch = useDispatch();
    return (

<BrowserRouter>
    <div className="container">
    <Routes>
        <Route path="/repo" element={<RepoCard/>}/>
        <Route path="/" element={<Main/>}/>
        <Route path="*" element={<Navigate replace to="/"/>}/>
    </Routes>
    </div>
</BrowserRouter>

    );
};

export default App;