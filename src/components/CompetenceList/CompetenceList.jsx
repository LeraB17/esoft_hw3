import React from 'react';
import "./CompetenceList.css";
import CompetenceCard from '#components/CompetenceCard/CompetenceCard';

const CompetenceList = ({ competencies, className, onClickDelete }) => {
    return (
        <ul className={['competencies__list', className].join(" ")}>
            {
                competencies?.map((competence =>
                    <CompetenceCard
                        key={competence?.id}
                        id={competence?.id}
                        name={competence?.name}
                        description={competence?.description}
                        level={competence?.level}
                        onClickDelete={() => onClickDelete(competence?.id) } />))
            }
        </ul>
    );
};

export default CompetenceList;