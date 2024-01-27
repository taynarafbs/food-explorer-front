import { Container } from "./styles";

export function TextArea({ id, rows = 3, cols = 50, value, ...rest }) {
    return (
    <Container>
        <textarea id={id} value={value} rows={rows} cols={cols} {...rest}></textarea>
     </Container>
    );
}