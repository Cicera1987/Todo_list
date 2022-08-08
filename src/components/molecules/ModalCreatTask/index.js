import React, { useState, useEffect } from 'react';
import { TitleTask, ContainerSelect } from './style';
import { ContainerButton } from '../../pages/TodoList/style'
import { Modal } from 'reactstrap';
import { ButtonLogin } from '../../atoms/Buttons/ButtonLogin/style';
import axios from 'axios'

const http = axios.create({
    baseURL: 'http:api'
})

const CreateTaskPopup = ({ modal, toggle, save }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [state, setState] = useState(1)

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name === "taskName" ) {
            setTaskName(value)
        }
         else if (name === "state") {
            setState(value)
            
        } else {
            setDescription(value)
        }

    }
    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        taskObj["State"] = state
        save(taskObj)
    }

    return (
        
        <Modal isOpen={modal} toggle={toggle}>
            <TitleTask toggle={toggle}>Criar lista</TitleTask>
            <form onSubmit={handleSave}>
                <div className="form-group">
                    <label>Título</label>
                    <input type="text"
                        className="form-control"
                        value={taskName}
                        onChange={handleChange}
                        name="taskName" />
                </div>

            <ContainerSelect type="text" value={state} onChange={handleChange} name="state" >
                <option value="Selecione o tipo">Selecione o tipo</option>
                <option value="Pendente">Pendente</option>
                <option value="Em Andamento">Em Andamento</option>
                <option value="Em Análise">Em Análise</option>
                <option value="Concluido">Concluido</option>
            </ContainerSelect>

                <div className="form-group">
                    <label>Decrição</label>
                    <textarea
                        rows="5"
                        className="form-control"
                        value={description}
                        onChange={handleChange}
                        name="description">
                    </textarea>
                </div>
            </form>
            <ContainerButton>
                <ButtonLogin onClick={handleSave}>Criar</ButtonLogin>{' '}
                <ButtonLogin onClick={toggle}>Cancel</ButtonLogin>
            </ContainerButton>
        </Modal>
    );
};

export default CreateTaskPopup;




