import React, { useEffect, useState } from 'react';
import CreateTaskPopup from '../../molecules/ModalCreatTask';
import Card from '../../molecules/ModalColors/Card';
import { TaskContainer, ContainerButton } from './style';
import { ButtonLogin } from '../../atoms/Buttons/ButtonLogin/style';
import { useNavigate } from "react-router-dom";
import PaginationComponents from '../../molecules/ModalPages/PaginationComponents';
import PaginationSelector from '../../molecules/ModalPages/PaginationSelector';
import InputSearch from '../../atoms/Inputs/InputSearch/InputSearch';



const TodoList = () => {

    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('taskList')) || [])
    const [createPost, setCreatePost] = useState([])
    const [update, setUpdate] = useState(false)
    const [del, setDel] = useState(false)
    const [search, setSearch] = useState("")
    const navigate = useNavigate();
    const [itensPerPage, setItensPerPage] = useState(8)
    const [currentPage, setCurrentPage] = useState(0)
    const pages = Math.ceil(taskList.length / itensPerPage)
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = taskList.slice(startIndex, endIndex)


    useEffect(() => {
        fetch('/api/taskList/')
            .then(res => res.json())
            .then((data) => {
                localStorage.setItem('taskList', JSON.stringify(data))
                setCurrentPage(0)
            })
            .catch(err => console.log(err))
    }, [update, itensPerPage])


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)

        fetch(`/api/delete/${index}`, {
            method: 'DELETE',

        })
            .then((res) => res.json())
            .then((json) => setDel(json));

        setDel(!del)
    }


    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        fetch(`/api/update/${obj.id}`, {
            method: 'PATCH',
            body: JSON.stringify(obj.id),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((json) => setUpdate(json));
        setUpdate(!update)
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
            .then((data) => setCreatePost(data))
            .catch(err => console.log(err))
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