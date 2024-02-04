import { Container, Form } from "./styles";
import { Footer } from '../../components/Footer';
import FoodImg from '../../assets/FoodImage.png';
import { HeaderUser } from "../../components/HeaderUser";
import { HeaderAdmin } from "../../components/HeaderAdmin";

import { Section } from "../../components/Section";
import { useAuth } from "../../hooks/auth";

export function Home() {
    const {isAdmin} = useAuth();
  

  
    return (
      <Container>
        {isAdmin ? <HeaderAdmin /> : <HeaderUser />}
        <Form>
          <div className="ImageHome">
            <img className="imageHeader" src={FoodImg} alt="FoodImage" />
            <div className="description">
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </div>

          <div className="Dishes"> 
            <h2>Refeições</h2>
            <div className="Section">
              <Section type="Refeições" />
            </div>

            <h2>Sobremesas</h2>
            <div className="Section">
              <Section type="Sobremesas" />
            </div>

            <h2>Bebidas</h2>
            <div className="Section">
              <Section type="Bebidas" />
            </div>
          </div>
          
        </Form>
        <Footer />
      </Container>
    );
}