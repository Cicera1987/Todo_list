import React, { useEffect, useState } from 'react';
import CreateTaskPopup from '../../molecules/ModalCreatTask';
import Card from '../../molecules/ModalColors/Card';
import { TaskContainer, ContainerButton, ContainerLabel } from './style';
import { Link } from 'react-router-dom';
import { ButtonLogin } from '../../atoms/Buttons/ButtonLogin/style';
import { ContainerBuscar } from '../../atoms/inputs/InputBuscar/style'



const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    const [createPost, setCreatePost] = useState([])
    const [update, setUpdate] = useState(false)

    const [search, setSearch] = useState([])

    useEffect(() => {
        fetch('/api/taskList/')
            .then(res => res.json())
            .then((data) => setTaskList(data))
            .catch(err => console.log(err))
    }, [update])


    const FilteredTask = search.length > 0
        ? taskList.filter(taskList.name.includes(search))
        : [];


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }
console.log('Renderiza')

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)

        fetch(`/api/update/${obj.id}`, {
            method: 'PATCH',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

        setUpdate(!update)
        

    }


    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setCreatePost(taskObj)
        setModal(false)
    }

    useEffect(() => {
        fetch('/api/create', {
            method: "POST",
            body: JSON.stringify(createPost),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }).then(res => res.json())
            .then((data) => console.log(data))
            .catch(err => console.log(err))


    }, [createPost])


    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <>
            <ContainerButton>
                <ButtonLogin onClick={() => setModal(true)} >Criar lista</ButtonLogin>
                <ContainerLabel>
                    
                    <ContainerBuscar>
                        <input
                            type="seach"
                            placeholder='Buscar'
                            onChange={e => setSearch(e.target.value)}
                            value={search}
                        />
                        {search.length > 0 ? (
                            <ul>
                                {FilteredTask.map(taskList => {
                                    return (
                                        <li key={taskList.name}>
                                            {taskList.name}
                                        </li>
                                    )
                                })}
                            </ul>
                        ) : (
                            <ul>
                                {search.map(taskList => {
                                    return (
                                        <li key={taskList.name}>
                                            {taskList.name}
                                        </li>
                                    )
                                })}
                            </ul>
                        )}
                    </ContainerBuscar>


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