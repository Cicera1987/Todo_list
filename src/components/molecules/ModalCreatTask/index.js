import React, { useState, useEffect } from 'react';
import { TitleTask } from './stayle';
import { ContainerButton } from '../../pages/TodoList/style'
import { Modal } from 'reactstrap';

const CreateTaskPopup = ({ modal, toggle, save }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
   
   
    // const [movies, setMovies] = useState(null)
    // useEffect(() => {
    //     fetch('/api/movies')
    //         .then(res => res.json())
    //         .then((json) => setMovies(json.movies))
    //         .catch(err => console.log(err))
    // }, [])


    const handleChange = (e) => {

        const { name, value } = e.target

        if (name === "taskName") {
            setTaskName(value)
        } else {
            setDescription(value)
        }

    }

    // const handleSave  = async (e) => {
    //     e.preventDefoult()
    //     try {
    //         const res = await fetch('api/moveis', {
    //             method: 'POST', body: JSON.stringify({
    //                 taskName, description
    //             })
    //         })
    //         const json = await res.json()
    //         taskName('')
    //         setDescription('')

    //     } catch (error) {

    //     }
    // }

    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
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
                        // onChange={e => setTaskName(e.target.value)}
                        name="taskName" />
                </div>
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
                <button className="btn btn-dark" onClick={handleSave}>Criar</button>{' '}
                <button className="btn btn-dark" onClick={toggle}>Cancel</button>
            </ContainerButton>
        </Modal>
    );
};

export default CreateTaskPopup;