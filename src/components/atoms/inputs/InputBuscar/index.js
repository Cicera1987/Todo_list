import {ContainerBuscar} from './style'
import { BiSearch } from "react-icons/bi";
import { useState, useEffect } from 'react';



export const InputBusca = ({value,index, buscaTask, onChange}) => { 
      const [search, setSearch] = useState([])
    //   const [taskList] = useState([])
      

    useEffect(() => {
        fetch('/api/taskList/')
            .then(res => res.json())
            .then((data) => setSearch(data))
            .catch(err => console.log(err))
    }, []) 

    const handleBusca = (e) => {
        e.preventDefault()
        setSearch(index)
    }
// const filteredTask = search.length > 0
//     ? taskList.filter(taskList.name.includes(search))
//     :[];

    
    return (
        <ContainerBuscar>
        <input
            type="seach"
            placeholder='Buscar' 
            onChange={ e => setSearch(e.target.value)} 
            value={search}  
        />
        <BiSearch onClick={handleBusca}/>
       {/* {search.length > 0 ? (
         <ul>
         {filteredTask.map(taskList => {
             return (
         <li key={taskList.name}>
             {task.name}
         </li>
             )
      })}
     </ul>
       ) : (
        <ul>
        {search.map(taskList => {
            return (
        <li key={taskList.name}>
            {task.name}
        </li>
            )
     })}
    </ul>
       )} */}
</ContainerBuscar>
    )
  }
