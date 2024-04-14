import React, { useEffect } from 'react';
import './CompetenceCard.css';

const CompetenceCard = ({ id, name, description, level }) => {

    useEffect(() => {
        console.log(`Компонент CompetenceCard ${id} монтируется`);
        return () => {
            console.log(`Компонент CompetenceCard ${id} размонтируется`);
        };
    }, []);

    return (
        <li className={'competence__card'}>
            <div className='text'>
                <div className='name'>{name}</div>
                <div className='description'>{description}</div>
            </div>
            <div className='level'>{level}%</div>
        </li>
    );
};

export default CompetenceCard;