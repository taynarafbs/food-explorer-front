
import { FiChevronLeft, FiMinus, FiPlus } from "react-icons/fi";

import FoodImg from '../.././assets/Imagens - Food Explorer-v2/Mask group.png';
import { Container, Form } from "./styles";

import { Button } from '../../components/Button';
import { Footer } from "../../components/Footer";

import { HeaderUser } from "../../components/HeaderUser";
import { HeaderAdmin } from "../../components/HeaderAdmin";


export function Dish() {


  return (
      <Container>
        {isAdmin ? <HeaderAdmin /> : <HeaderUser />}
        <Form>
          <button className="goBack" type="button">
            <FiChevronLeft />
            <h5>voltar</h5>
          </button>
          {plate && (
          <main>
            <img className="plateImg" src={FoodImg} alt="Mask group"/>

            <div className="dishInformation">
              <h1>{plate.title}</h1>
              <p>{plate.description}</p>

              <div className="tags">
                <Button title="tag ingredientes" />
              </div>
              {isAdmin ? (
                <div className="dishAdd">
                  <Button title="Editar prato" />
                </div>
              ) : (
                <div className="quantity">
                  <div className="decreaseOrAdd">
                    <FiMinus type="button" />
                    <span>{quantity}</span>
                    <FiPlus type="button"  />
                  </div>
                  <Button className="dishAdd" title="incluir R$:">
                    <p>{plate.price * quantity}</p>
                  </Button>
                </div>
              )}
            </div>
          </main>
        )}
        </Form>
        <Footer />
    </Container>
  );
}
