import React, { useEffect, useState } from 'react';
import CreateTaskPopup from '../../molecules/ModalCreatTask';
import Card from '../../molecules/ModalColors/Card';
import { TaskContainer, ContainerButton } from './style';
import { ButtonLogin } from '../../atoms/Buttons/ButtonLogin/style';
import { useNavigate } from "react-router-dom";
import PaginationComponents from '../../molecules/ModalPages/PaginationComponents';
import PaginationSelector from '../../molecules/ModalPages/PaginationSelector';
import InputSearch from '../../atoms/Inputs/InputSearch/InputSearch';
import axios from 'axios'

const http = axios.create({
    baseURL: 'http://todolistdesafio.com.br'
})


const TodoList = () => {

    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('taskList')) || [])
    const [createPost, setCreatePost] = useState([])
    const [update, setUpdate] = useState(false)
    const [del, setDel] = useState(false)
    const [search, setSearch] = useState("")
    const navigate = useNavigate();
    const [itensPerPage, setItensPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)


    const pages = Math.ceil(taskList.length / itensPerPage)
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = taskList.slice(startIndex, endIndex)



    useEffect(() => {
        http.get('/api/taskList/', (res, req) => {
            res.json()
                .then((data) => {
                    setTaskList(data)
                    setCurrentPage(0)
                }).catch(err => console.log(err))
        })
    }, [update, itensPerPage, createPost])


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        http.delete(`/api/delete/${index}`, {
            method: 'DELETE',
        }).then(() => {
            setDel(!del)
        });

    }


    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        http.patch(`/api/update/${obj.id}`, {
            method: 'PATCH',
            body: JSON.stringify(obj.id),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(res => {
            setUpdate(res.data)

        }).catch(err => console.log(err))
    }
    if (!update);

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
        http.post('/api/create', {
            method: "POST",
            body: JSON.stringify(taskObj),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }).then(res => {
            setCreatePost(res.data)

        }).catch(err => console.log(err))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate("/")
    }

    const toggle = () => {
        setModal(!modal);
    }


    const filteredTask = search.length > 0 ?
        taskList.filter((obj) =>
            obj.Name.toLowerCase().includes(search.toLowerCase())) : [];

    return (
        <>
            <ContainerButton>
                <ButtonLogin onClick={() => setModal(true)} >Criar lista</ButtonLogin>
                <InputSearch search={search} setSearch={setSearch} />
                <ButtonLogin onClick={handleSubmit}>Sair</ButtonLogin>
            </ContainerButton>
            <TaskContainer>
                {!search.length > 0
                    ? currentItens && currentItens.map((obj, index) => <Card key={index} taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />)
                    : filteredTask.map((obj, index) => <Card key={index} taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />)}
            </TaskContainer>
            <PaginationSelector itensPerPage={itensPerPage} setItensPerPage={setItensPerPage} />
            <PaginationComponents pages={pages} setCurrentPage={setCurrentPage} />
            <CreateTaskPopup toggle={toggle} modal={modal} save={saveTask} />

        </>
    );
};

export default TodoList;