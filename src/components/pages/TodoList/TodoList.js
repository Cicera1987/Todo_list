import React, { useEffect, useState } from 'react';
import CreateTaskPopup from '../../molecules/ModalCreatTask';
import Card from '../../molecules/ModalColors/Card';
import { TaskContainer, ContainerButton, ContainerBuscar, ContainerLabel } from './style';
import { Link } from 'react-router-dom';
import { ButtonLogin } from '../../atoms/Buttons/ButtonLogin/style';


const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])

    // useEffect(() => {
    //     fetch('/api/taskList')
    //         .then(res => res.json())
    //         .then((json) => setTaskList(json.taskList))
    //         .catch(err => console.log(err))
    // }, [])

    useEffect(() => {
        let arr = localStorage.getItem("taskList")

        if (arr) {
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])




    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {
            sair: "sair",

        }
        console.log(user)
    };


    return (
        <>
            <ContainerButton>
                <ButtonLogin onClick={() => setModal(true)} >Criar lista</ButtonLogin>
                <ContainerLabel>
                    <ContainerBuscar>
                        <input
                            type="text"
                            name="buscar"
                            id="buscar"
                        />
                    </ContainerBuscar>
                    <ButtonLogin type="submit" value="Buscar">Buscar</ButtonLogin>
                </ContainerLabel>
                <ButtonLogin onClick={handleSubmit}><Link to="/">Sair</Link></ButtonLogin>
            </ContainerButton>

            <TaskContainer>
                {taskList && taskList.map((obj, index) => <Card key={index} taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />)}
            </TaskContainer>
            <CreateTaskPopup toggle={toggle} modal={modal} save={saveTask} />


        </>
    );
};

export default TodoList;