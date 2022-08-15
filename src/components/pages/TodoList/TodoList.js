import React, { useEffect, useState } from 'react';
import CreateTaskPopup from '../../molecules/ModalCreatTask';
import Card from '../../molecules/ModalColors/Card';
import { TaskContainer, ContainerButton, ContainerLabel, ContainerBuscar } from './style';
import { StyleLink } from '../../atoms/StyleLink/style';
import { ButtonLogin } from '../../atoms/Buttons/ButtonLogin/style';
import { useNavigate } from "react-router-dom";



const TodoList = () => {

    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('taskList')) || [])
    const [createPost, setCreatePost] = useState([])
    const [update, setUpdate] = useState(false)
    const [del, setDel] = useState(false)
    const [search, setSearch] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/api/taskList/')
            .then(res => res.json())
            .then((data) => {
                localStorage.setItem('taskList', JSON.stringify(data))
            })
            .catch(err => console.log(err))
    }, [update])


    const filteredTask = search.length > 0 ? taskList.filter((obj) => obj.Name.toLowerCase().includes(search.toLowerCase())) : [];

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)

        fetch(`/api/delete/${index}`, {
            method: 'DELETE',

        })
            .then((response) => response.json())
            .then((json) => console.log(json));

        setDel(!del)
    }


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

        fetch('/api/create', {
            method: "POST",
            body: JSON.stringify(taskObj),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }).then(res => res.json())
            .then((data) => console.log(data))
            .catch(err => console.log(err))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate("/")
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
                    </ContainerBuscar>
                </ContainerLabel>
                <ButtonLogin onClick={handleSubmit}>Sair</ButtonLogin>
            </ContainerButton>

            <TaskContainer>
                {!search.length > 0
                    ? taskList && taskList.map((obj, index) => <Card key={index} taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />)
                    : filteredTask.map((obj, index) => <Card key={index} taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />)}
            </TaskContainer>
            <CreateTaskPopup toggle={toggle} modal={modal} save={saveTask} />
        </>
    );
};

export default TodoList;