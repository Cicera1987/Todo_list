import React from 'react'
import { PaginationSelect } from './style';

const PaginationSelector = ({itensPerPage, setItensPerPage}) => {
  return ( 
      <PaginationSelect>
          <select value={itensPerPage} onChange={(e) => setItensPerPage(Number(e.target.value))}>
              <option value="1">Número de Itens por Página</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="10">10</option>
          </select>
      </PaginationSelect>
  )
}

export default PaginationSelector