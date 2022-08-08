import React, {Componet} from "react";
import ButtonLogin from './style'

export class Button extends Componet {
    render() {
        return(
            <ButtonLogin>
            <button 
            type="submit" 
            >
            {this.props.children}
            </button>
            </ButtonLogin>
        )
    }
}