import { FiChevronLeft } from "react-icons/fi";
import { Container, Form } from "./styles";


import { HeaderUser} from "../../components/HeaderUser";

export function Hometest() {

  return (
      <Container>
        <HeaderUser/>
        <Form>
            <button className="goBack" type="button">
                <FiChevronLeft />
                <h5>voltar</h5>
            </button>
        </Form>
    </Container>
  );
}
