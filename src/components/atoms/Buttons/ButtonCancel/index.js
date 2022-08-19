
import ButtonCancel from "./style";

export const Button = () => {
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