import { FiChevronLeft, FiMinus, FiPlus } from "react-icons/fi";

import FoodImg from '../.././assets/Imagens - Food Explorer-v2/Mask group.png';
import { Container, Form } from "./styles";

import { Button } from '../../components/Button';
import { Footer } from "../../components/Footer";

import { HeaderUser } from "../../components/HeaderUser";


export function Details() {


  return (
      <Container>
        <HeaderUser />
        <Form>
          <button className="goBack" type="button">
            <FiChevronLeft />
            <h5>voltar</h5>
          </button>
          <main>
            <img className="plateImg" src={FoodImg} alt="Mask group"/>

            <div className="dishInformation">
              <h1>Salada Ravanello</h1>
              <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>

              <div className="tags">
                <Button title="tag ingredientes" />
              </div>
              <div className="quantity">
                  <div className="decreaseOrAdd">
                    <FiMinus type="button" />
                    <span>01</span>
                    <FiPlus type="button"  />
                  </div>
                  <Button className="dishAdd" title="incluir:">
                    <p>R$ 25,00</p>
                  </Button>
              </div>
            </div>
          </main>
        </Form>
        <Footer />
    </Container>
  );
}
