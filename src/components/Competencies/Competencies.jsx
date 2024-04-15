import React, { useState } from 'react';
import './Competencies.css';
import CompetenceForm from '#components/CompetenceForm/CompetenceForm';
import CompetenceList from '#components/CompetenceList/CompetenceList';
import CompetenceFilters from '#components/CompetenceFilters/CompetenceFilters';

const competence_empty = {
    name: undefined,
    description: undefined,
    level: undefined,
}

const Competencies = ({ isShowCompetencies, isShowForm, user }) => {
    const [competencies, setCompetencies] = useState(user?.competencies);
    const [competenceForm, setCompetenceForm] = useState(competence_empty);

    const filterCompetencies = (comparisson = ">", value = 50) => {
        let newList;
        switch (comparisson) {
            case ">":
                newList = user?.competencies.filter(c => c.level > value);
                break;
            case "<":
                newList = user?.competencies.filter(c => c.level < value);
                break;
            default:
                newList = user?.competencies;
        }
        setCompetencies(newList);
    }

    const addCompetence = () => {
        const newCompetence = {
            "id": user?.competencies.at(-1).id + 1,
            "name": competenceForm.name,
            "description": competenceForm.description,
            "level": competenceForm.level
        }
        user?.competencies.push(newCompetence);
        setCompetencies(user?.competencies);
        setCompetenceForm(competence_empty);
    }

    const deleteCompetence = (id) => {
        // удалить глобально
        user.competencies = user?.competencies.filter(c => c.id != id);
        // удалить в отфильтрованном списке
        const newList = competencies.filter(c => c.id != id);
        setCompetencies(newList);
    }

    return (
        <>
            {
                isShowForm ?
                    <CompetenceForm
                        className={"block1"}
                        formValue={competenceForm}
                        onChangeFormValue={(e) => setCompetenceForm({ ...competenceForm, [e.target.name]: e.target.value })}
                        onClickSave={addCompetence}
                    />
                    : null
            }
            {
                isShowCompetencies ? <>
                    <CompetenceList
                        competencies={competencies}
                        className='block2'
                        onClickDelete={deleteCompetence}
                    />
                    <div>
                        <CompetenceFilters
                            className='block3'
                            filterCompetencies={filterCompetencies}
                        />
                    </div>
                </>
                    : null
            }
        </>
    );
};

export default Competencies;