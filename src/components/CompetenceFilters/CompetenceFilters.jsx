import React from 'react';
import "./CompetenceFilters.css";
import Button from '#components/Button/Button';

const CompetenceFilters = ({ className, filterCompetencies }) => {

    return (
        <div className={`competence__filter ${className}`}>
            <div className='title'>Показать компетенции <br />с уровнем изучения</div>
            <div className='button__wrapper'>
                <Button
                    text={"> 50%"}
                    onClick={() => filterCompetencies(">", 50)}
                />
            </div>
            <div className='button__wrapper'>
                <Button
                    text={"< 50%"}
                    onClick={() => filterCompetencies("<", 50)}
                />
            </div>
            <div className='button__wrapper'>
                <Button text={"Сброс"}
                    onClick={() => filterCompetencies("")}
                />
            </div>
        </div>
    );
};

export default CompetenceFilters;