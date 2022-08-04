import React, {useState} from 'react';
import EditTaskPopup from '../ModalEditTask';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Fill} from "react-icons/ri";
import { CardHeader,CardContainer,CardWrapper,CardTop, TaskHolder, CardText,CardIcon } from './style';

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = (e) => {
        e.preventDefault()
        deleteTask(index)
    }

    return (
        <CardWrapper>
            <CardTop></CardTop>
            <TaskHolder>
                <CardHeader>{taskObj.Name}</CardHeader>
                <CardText>{taskObj.Description}</CardText>
                <CardIcon>
                    <a onClick = {() => setModal(true)}><FiEdit/></a>
                     < RiDeleteBin6Fill onClick = {handleDelete}/>
                </CardIcon>
        </TaskHolder>
        <EditTaskPopup modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </CardWrapper>
    );
};

export default Card;