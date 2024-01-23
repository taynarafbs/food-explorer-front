
import { Container, Form } from "./styles";
import { Footer } from '../../components/Footer';
import FoodImg from '../../assets/FoodImage.png';
import { HeaderUser } from "../../components/HeaderUser";

import { Section } from "../../components/Section";

export function Home(cards,) {

  // console.log(dishes)
  // console.log(user)
  /*
  todo:
  - fazer o wrapper pra nao ficar so em uma linha
  - fazer o controle do amount correlacionado com o prato (pode ser o pedido mermo) +1 -1 nao mudar em todos
  - fazer o controle de detalhes do prato (favoritado?)
  - formacao de preço
  - rota de edicao
  - botao favorito ser um toggle (liga e desliga)
  */

  return (
    <Container>
      <HeaderUser />
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
