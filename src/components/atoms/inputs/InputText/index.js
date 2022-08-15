import { InputModal } from "./style"

export const InputText = ({ onChange, editValue, width, placeholder, value, type, invalid }) => {

  
        return (
            <InputModal
                value={value}
                placeholderColor={invalid === true && "red"}
                onChange={onChange}
                type={"text"}
                defaultValue={editValue}
                width={width}
                padding="0.3em 1.2em 0 1.2em"
                placeholder={placeholder}>
                
            </InputModal>
        )
    
}
