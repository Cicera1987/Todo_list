import React, {Componet} from "react";
import ButtonSecundary from "./style";

export class Button extends Componet {
    render() {
        return(
            <ButtonSecundary>
            <button type="submit" className="btn btn-secundary">{this.props.children}</button>
            </ButtonSecundary>
        )
    }
}