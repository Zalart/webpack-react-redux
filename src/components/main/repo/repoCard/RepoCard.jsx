import React from 'react';
import { useNavigate } from 'react-router-dom';

const RepoCard = (props) => {
let navigate = useNavigate();
    return (
        <div>
            <button className="back-btn" onClick={()=> navigate(-1)}>BACK</button>
            Hello
        </div>
    );
};

export default RepoCard;