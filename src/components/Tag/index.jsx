import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

export function Tag ({ name, isNew = false, onClick, isFixed = false, ...rest }) {
    return (
        <Container readOnly={!isNew}>
            <input type="text" name={name} readOnly={!isnew} {...rest}/>
            <button 
                type="button"
                onClick={onClick}
                className={isNew ? "button-ad": "button-delete"}
            >
                {isFixed ? undefined : isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    );
}