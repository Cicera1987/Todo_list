import React from 'react'
import { PaginationSelect } from './style';

const PaginationSelector = ({itensPerPage, setItensPerPage}) => {
  return ( 
      <PaginationSelect>
          <select value={itensPerPage} onChange={(e) => setItensPerPage(Number(e.target.value))}>
              <option value="">Número de Itens</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
          </select>
      </PaginationSelect>
  )
}

export default PaginationSelector