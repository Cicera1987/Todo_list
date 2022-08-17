import React from 'react';
import { Pagination,  } from './style';

const PaginationComponents = ({pages,setCurrentPage}) => {
  return (
      <Pagination >
      {Array.from(Array(pages), (item, index) => {
          return <button 
            value={index} 
            onClick={(e) => 
                setCurrentPage(Number(e.target.value))}>
              {index + 1}</button>
          })}
      </Pagination >
  )
}

export default PaginationComponents