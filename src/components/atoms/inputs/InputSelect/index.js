import React, { useState } from 'react'
import { ContainerBuscar } from './style'

export const InputSelect = () => {
    
    const [state, setState] = useState(1)

    const handleState = e =>
        e.preventDefault()
    return (

        <form onSubmit={handleState}>
            <select name="state" value={state} onChange={text => setState(text.target.value)}>
                <option value="">Selecione</option>
                <option value="1">Itens Pendente</option>
                <option value="2">Em Andamento</option>
                <option value="3">Em Análise</option>
                <option value="4">Itens Concluidos</option>
            </select>
        </form>

    )
}
