import DefaultInput from "../DefaultInput/style";


const InputText = ({onChange, editValue, width,  placeholder, value, type,invalid}) => {

    return (
            <DefaultInput
            value={value}
            placeholderColor={invalid === true && "red"}
            onChange={onChange}
            type={type ? type : "text"}
            defaultValue={editValue}
            width={width}
            padding="0.3em 1.2em 0 1.2em"
            placeholder={placeholder}
            >
            </DefaultInput>

    )
}
export default InputText;
