import React, { useState, useEffect } from 'react';
import EditTaskPopup from '../ModalEditTask';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Fill, } from "react-icons/ri";
import { ImFileText2 } from "react-icons/im";
import { CardHeader, CardWrapper, CardTop, TaskHolder, CardText, CardIcon, CardSelect, CardIconVisual } from './style';

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = (e) => {
        e.preventDefault()
        deleteTask(taskObj.id)
    }

    useEffect(()=>{
        console.log(taskObj)
        console.log(index)
    },[taskObj, index])

    return (
        <CardWrapper>
            <CardTop></CardTop>
            <TaskHolder>
                <CardHeader>{taskObj.Name}</CardHeader>
                <CardSelect>{taskObj.State}</CardSelect>
                <CardText>{taskObj.Description}</CardText>
                <CardIconVisual>
                    <a onClick={() => setModal(true)}><ImFileText2 /> </a>
                </CardIconVisual>

                <CardIcon>
                    <a onClick={() => setModal(true)}><FiEdit /></a>
                    <a onClick={handleDelete}><RiDeleteBin6Fill /> </a>
                </CardIcon>
            </TaskHolder>
            <EditTaskPopup modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </CardWrapper>
    );
};

export default Card;