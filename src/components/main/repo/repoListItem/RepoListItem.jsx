import React from 'react';
import './repoListItem.less';
import {NavLink} from "react-router-dom";
const RepoListItem = (props) => {
const repo = props.repo;
    return (
        <div className="repo">
            <div className="repo-header">
                <div className="repo-header-name"><NavLink to="/repo">{repo.name}</NavLink></div>
                <div className="repo-header-stars">{repo.stargazers_count}</div>
            </div>
            <div className="repo-description">{repo.description}</div>
            <div className="repo-last-commit">{repo.updated_at}</div>
            <a href={repo.html_url} className="repo-link">Ссылка на репозиторий</a>
        </div>
    );
};

export default RepoListItem;