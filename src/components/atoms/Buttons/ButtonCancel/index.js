import React, { Componet } from "react";
import ButtonCancel from "./style";

export class Button extends Componet {
    render() {
        return (
            <ButtonCancel>
                <button
                    type="submit"
                    className="btn btn-dark"
                >
                 {this.props.children}
                </button>
            </ButtonCancel>
        )
    }
}