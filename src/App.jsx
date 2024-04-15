import './App.css'
import UserCard from '#components/UserCard/UserCard'
import CompetenceList from '#components/CompetenceList/CompetenceList'
import CompetenceFilters from '#components/CompetenceFilters/CompetenceFilters'
import { useState } from 'react'
import CompetenceForm from '#components/CompetenceForm/CompetenceForm'

const user = {
  "image": 'images/avatar.jpg',
  "userinfo": {
    "name": "Бородина Валерия Александровна",
    "github": "https://github.com/LeraB17",
  },
}

let competenciesList = [
  { "id": 1, "name": "NodeJS", "description": "NodeJS Meow NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS", "level": 30 },
  { "id": 2, "name": "JavaScript", "description": "JavaScript JavaScript JavaScript Meow JavaScript JavaScript JavaScript", "level": 45 },
  { "id": 3, "name": "Typescript", "description": "Typescript Typescript Typescript Meow Typescript Typescript Typescript Typescript", "level": 2 },
  { "id": 4, "name": "WebSocket", "description": "WebSocket WebSocket WebSocket WebSocket Meow", "level": 75 },
  { "id": 5, "name": "React", "description": "React React React React Meow React React React Meow React React React React Meow React React React Meow", "level": 60 },
  { "id": 6, "name": "Тестирование", "description": "Тестирование Тестирование Тестирование Тестирование", "level": 49 },
  { "id": 7, "name": "Vue", "description": "Vue Vue Vue Vue Vue Vue Vue Vue Vue Vue Vue Vue", "level": 15 },
  { "id": 8, "name": "Git", "description": "Git Git Meow Git Git Git Git Git", "level": 56 },
  { "id": 9, "name": "CI/CD", "description": "CI/CD CI/CD CI/CD CI/CD Meow CI/CD ", "level": 5 },
  { "id": 10, "name": "Docker", "description": "Docker Docker Docker Meow Docker", "level": 20 },
]

const competence_empty = {
  name: undefined,
  description: undefined,
  level: undefined,
}

function App() {
  const [isShowCompetencies, setIsShowCompetencies] = useState(false);
  const [isShowForm, setIsShowForm] = useState(false);
  const [competencies, setCompetencies] = useState(competenciesList);
  const [competenceForm, setCompetenceForm] = useState(competence_empty);

  const filterCompetencies = (comparisson = ">", value = 50) => {
    let newList;
    switch (comparisson) {
      case ">":
        newList = competenciesList.filter(c => c.level > value);
        break;
      case "<":
        newList = competenciesList.filter(c => c.level < value);
        break;
      default:
        newList = competenciesList;
    }
    setCompetencies(newList);
  }

  const addCompetence = () => {
    const newCompetence = {
      "id": competenciesList.at(-1).id + 1,
      "name": competenceForm.name,
      "description": competenceForm.description,
      "level": competenceForm.level
    }
    competenciesList.push(newCompetence);
    setCompetencies(competenciesList);
    setCompetenceForm(competence_empty);
  }

  const deleteCompetence = (id) => {
    // удалить глобально
    competenciesList = competenciesList.filter(c => c.id != id);
    // удалить в отфильтрованном списке
    const newList = competencies.filter(c => c.id != id);
    setCompetencies(newList);
  }

  return (
    <div className='container'>
      <UserCard
        user={user}
        className={"block1"}
        isShowCompetencies={isShowCompetencies}
        isShowForm={isShowForm}
        onClickButtonCompetencies={() => setIsShowCompetencies((prev) => !prev)}
        onClickButtonForm={() => setIsShowForm((prev) => !prev)}
      />
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
    </div>
  )
}

export default App
