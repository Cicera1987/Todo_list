import React, { useState, useEffect } from 'react';
import EditTaskPopup from '../ModalEditTask';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Fill, } from "react-icons/ri";
import { CardHeader, CardWrapper, CardTop, TaskHolder, CardText, CardIcon, CardSelect, CardIconVisual } from './style';


const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);

    //forEach de cores
    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },

        {
            primaryColor: "#F4A460",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#8A2BE2",
            secondaryColor: "#FFF5EE"
        },
        {
            primaryColor: "#778899",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#B22222",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#00BFFF",
            secondaryColor: "#F5FFFA"
        },
        {
            primaryColor: "#9d4e15",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#556B2F",
            secondaryColor: "#FEFAF1"
        },
    ]

    const toggleColor = ()=>{
        return colors[index % colors.length]
    }

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

}, [taskObj, index])

    return (
        <CardWrapper>
            <CardTop style={{"backgroundColor": toggleColor().primaryColor }}></CardTop>
            <TaskHolder>
                <CardHeader style={{ "backgroundColor": toggleColor().secondaryColor }}>{taskObj.Name}</CardHeader>
                <CardSelect style={{ "backgroundColor": toggleColor().primaryColor }}>{taskObj.State}</CardSelect>
                <CardText>{taskObj.Description}</CardText>
                <CardIcon>
                    <a style={{ "color": toggleColor().primaryColor }} onClick={() => setModal(true)}><FiEdit /></a>
                    <a style={{ "color": toggleColor().primaryColor }} onClick={handleDelete}><RiDeleteBin6Fill /> </a>
                </CardIcon>
            </TaskHolder>
            <EditTaskPopup modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </CardWrapper>
    );
};

export default Card;