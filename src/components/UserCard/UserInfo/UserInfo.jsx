import React from 'react';
import './UserInfo.css';

const UserInfo = ({ userinfo }) => {
    return (
        <div className='user__info'>
            <div className='info__item'>
                <span>{userinfo?.name}</span>
            </div>
            <a className='github__link' href={userinfo?.github}>
                {userinfo?.github}
            </a>
        </div>
    );
};

export default UserInfo;