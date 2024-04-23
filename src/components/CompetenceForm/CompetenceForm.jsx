import React, { useState } from 'react';
import './CompetenceForm.css';
import Input from '#components/Input/Input';
import Button from '#components/Button/Button';

const CompetenceForm = ({ formValue, onChangeFormValue, className, onClickSave }) => {
    const [isValid, setIsValid] = useState(true)

    const checkValid = (formValue) => {
        return formValue?.name && formValue?.description && Number(formValue?.level) >= 0 && Number(formValue?.level) <= 100
    }

    const saveHandler = () => {
        if (checkValid(formValue)) {
            onClickSave();
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }

    return (
        <div className={['competence__form', className].join(' ')}>
            <div className='title'>Добавить компетенцию</div>
            <Input
                label={"Название"}
                value={formValue?.name}
                name={"name"}
                type={"text"}
                placeholder={"Введите название компетенции..."}
                onChange={onChangeFormValue}
            />
            <Input
                label={"Описание"}
                value={formValue?.description}
                name={"description"}
                type={"text"}
                placeholder={"Введите описание компетенции..."}
                onChange={onChangeFormValue}
            />
            <Input
                label={"Уровень освоения"}
                value={formValue?.level}
                name={"level"}
                type={"number"}
                placeholder={"Введите уровень освоения..."}
                onChange={onChangeFormValue}
            />
            <div className='button__wrapper'>
                {
                    isValid ? null
                        : <div className='error__message'>
                            Некорректные данные
                        </div>
                }
                <Button
                    text={"Добавить"}
                    onClick={saveHandler}
                />
            </div>
        </div>
    );
};

export default CompetenceForm;