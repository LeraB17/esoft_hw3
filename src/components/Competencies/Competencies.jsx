import React, { useState } from 'react';
import './Competencies.css';
import CompetenceForm from '#components/CompetenceForm/CompetenceForm';
import CompetenceList from '#components/CompetenceList/CompetenceList';
import CompetenceFilters from '#components/CompetenceFilters/CompetenceFilters';

const competenceEmpty = {
    name: undefined,
    description: undefined,
    level: undefined,
}

const Competencies = ({ isShowCompetencies, isShowForm, competencies }) => {
    const [allCompetencies, setAllCompetencies] = useState(competencies);
    const [filteredCompetencies, setFilteredCompetencies] = useState(competencies);
    const [competenceForm, setCompetenceForm] = useState(competenceEmpty);

    const filterCompetencies = (comparisson = ">", value = 50) => {
        let newList;
        switch (comparisson) {
            case ">":
                newList = allCompetencies.filter(c => c.level > value);
                break;
            case "<":
                newList = allCompetencies.filter(c => c.level < value);
                break;
            default:
                newList = allCompetencies;
        }
        setFilteredCompetencies(newList);
    }

    const addCompetence = () => {
        const newCompetence = {
            "id": allCompetencies.at(-1).id + 1,
            "name": competenceForm.name,
            "description": competenceForm.description,
            "level": competenceForm.level
        }
        setAllCompetencies(prev => [...prev, newCompetence]);
        setFilteredCompetencies([...allCompetencies, newCompetence]);
        setCompetenceForm(competenceEmpty);
    }

    const deleteCompetence = (id) => {
        // удалить глобально
        setAllCompetencies(prev => prev.filter(c => c.id != id));
        // удалить в отфильтрованном списке
        setFilteredCompetencies(prev => prev.filter(c => c.id != id));
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
                        competencies={filteredCompetencies}
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