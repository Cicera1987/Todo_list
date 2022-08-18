import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, Button, ModalBody, ModalFooter } from 'reactstrap';
import { ContainerSelect, TitleLabel, StyleForm } from '../ModalCreatTask/style';


const EditTaskPopup = ({ modal, toggle, updateTask, taskObj, value }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [state, setState] = useState(1)

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name === "taskName") {
            setTaskName(value)
        }
        else if (name === "state") {
            setState(value)
        } else {
            setDescription(value)
        }

    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setState(taskObj.State)
        setDescription(taskObj.Description)
    }, [taskObj])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['State'] = state
        tempObj['Description'] = description
        tempObj['id'] = taskObj.id
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Página de Edição</ModalHeader>
            <ModalBody>
                <div className="form-group">
                    <TitleLabel>Titulo</TitleLabel>
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
                    <TitleLabel>Descrição</TitleLabel>
                    <textarea rows="5"
                        className="form-control"
                        value={description}
                        onChange={handleChange} name="description"></textarea>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button onClick={handleUpdate}>Update</Button>{' '}
                <Button onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditTaskPopup;