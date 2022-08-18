import React from 'react';
import { Pagination, buttonPage } from './style';

const PaginationComponents = ({ pages, setCurrentPage }) => {
  return (
    <Pagination >
      {Array.from(Array(pages), (item, index) => {
        return <button 
          style={{ border: "none", backgroundColor :"#fff", fontSize: "18px"}}
          value={index}
          key={index}
          onClick={(e) =>
            setCurrentPage(Number(e.target.value))}>
          {index + 1}
        </button>
      })}
    </Pagination >
  )
}

export default PaginationComponents