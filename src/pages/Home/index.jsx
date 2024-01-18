import { FiChevronLeft } from "react-icons/fi";
import { Container, Form } from "./styles";
import { Footer } from '../../components/Footer';
import FoodImg from '../../assets/FoodImage.png';
import { HeaderAdmin } from "../../components/HeaderAdmin";

import { Section } from "../../components/Section";

export function Home(cards,) {


  return (
    <Container>
      <HeaderAdmin />
      <Form>
        <div className="ImageHome">
          <img className="imageHeader" src={FoodImg} alt="FoodImage" />
          <div className="description">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>

        <h2>Refeições</h2>
        <div className="Section">
          <Section />
        </div>


        <button className="goBack" type="button">
          <FiChevronLeft />

        </button>
      </Form>
      <Footer />
    </Container>
  );
}
