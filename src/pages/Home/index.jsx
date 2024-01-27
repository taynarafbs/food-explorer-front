
import { Container, Form } from "./styles";
import { Footer } from '../../components/Footer';
import FoodImg from '../../assets/FoodImage.png';
import { HeaderUser } from "../../components/HeaderUser";
import { HeaderAdmin } from "../../components/HeaderAdmin";

import { Section } from "../../components/Section";
import { useAuth } from "../../hooks/auth";
//import { useLocation, useNavigate, useParams } from "react-router-dom";
//import { api } from "../../services/api";
//import { useAuth } from "../../hooks/auth";

export function Home(cards,) {
 const {isAdmin} = useAuth();

  //const { isAdmin } = useAuth();
  //const isAdmin = user && user.admin ? true : false;

  /*const navigate = useNavigate();
  const { state } = useLocation();
  const { data } = state;
  const params = useParams();
  */

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


        <h2>Refeições</h2>
        <div className="Section">
          <Section />
        </div>


      </Form>
      <Footer />
    </Container>
  );
}
