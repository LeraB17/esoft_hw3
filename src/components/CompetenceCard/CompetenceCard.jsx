import React from 'react';
import './CompetenceCard.css';
import deleteIcon from '#assets/delete.svg';
import ButtonIcon from '#components/ButtonIcon/ButtonIcon';

const CompetenceCard = ({ id, name, description, level, onClickDelete }) => {
    return (
        <li className={'competence__card'}>
            <div className='text'>
                <div className='name'>{name}</div>
                <div className='description'>{description}</div>
            </div>
            <div className='card__right'>
                <div className='level'>{level}%</div>
                <ButtonIcon
                    icon={deleteIcon}
                    size={40}
                    onClick={onClickDelete}
                />
            </div>
        </li>
    );
};

export default CompetenceCard;