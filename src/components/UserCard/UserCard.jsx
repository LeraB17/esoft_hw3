import React from 'react';
import './UserCard.css';
import ImageRound from '#components/ImageRound/ImageRound';
import UserInfo from './UserInfo/UserInfo';
import Button from '#components/Button/Button';

const UserCard = ({ user, className, isShowCompetencies, isShowForm, onClickButtonCompetencies, onClickButtonForm }) => {
    return (
        <div className={['usercard', className].join(' ')}>
            <ImageRound src={user?.image} />
            <UserInfo userinfo={user?.userinfo} />
            <div className='wrapper'>
                <div className='button'>
                    <Button
                        text={isShowCompetencies ? "Скрыть компетенции" : "Показать компетенции"}
                        onClick={onClickButtonCompetencies}
                    />
                </div>
                <div className='button'>
                    <Button
                        text={isShowForm ? "Скрыть форму" : "Добавить"}
                        onClick={onClickButtonForm}
                    />
                </div>
            </div>

        </div>
    );
};

export default UserCard;