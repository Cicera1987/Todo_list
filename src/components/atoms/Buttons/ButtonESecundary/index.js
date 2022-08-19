
import ButtonSecundary from "./style";

export const Button = () => {

    return (
        <ButtonSecundary>
            <button type="submit" className="btn btn-secundary">{this.props.children}</button>
        </ButtonSecundary>
    )
}