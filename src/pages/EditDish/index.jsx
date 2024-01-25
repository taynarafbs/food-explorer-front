import { FiChevronLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";

import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";

import { HeaderAdmin } from "../../components/HeaderAdmin";


export function EditDish() {
  const navigate = useNavigate();

  return (
    <Container>
      <HeaderAdmin />
      <main>
        <Form>
          <header>
            <button className="goBack" type="button" onClick={() => navigate(-1)}>
              <FiChevronLeft />
              voltar
            </button>
          </header>
          <h1>Editar prato</h1>
          <div className="FirstInformation">
            <div className="dishImage">
              <h5>Imagem do prato</h5>
              <div className="image">
                <label htmlFor="inputImage">
                  <Input
                    type="text"
                    name="inputImage"
                    id="inputImage"
                    placeholder="Selecione imagem"
                  />
                </label>
              </div>
            </div>

            <div className="name">
              <h5>Nome</h5>
              <Input
                type="text"
                placeholder="Ex.:Salada Ceasar"
                id="name"
                name="title"
              />
            </div>

            <div className="category">
              <h5>Categoria</h5>
              <Input
                id="refeicao"
                type="text"
                placeholder="Refeição"
                name="refeicao"
              />
            </div>
          </div>

          <div className="additionalInformation">
            <div className="ingredients">
              <h5>Ingredientes</h5>
              <Input
                id="adicionar"
                type="text"
                placeholder="Adicionar"
                name="adicionar"
              />
            </div>
            <div className="price">
              <h5>Preço</h5>
              <Input
                id="price"
                type="text"
                placeholder="R$00,00"
                name="price"
              />
            </div>
          </div>
          <div className="description">
            <h5>Descrição</h5>
            <Input
              id="descricao"
              type="text"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              name="decricao"
            />
          </div>

          <div className="button">
            <Button
              title="Excluir prato"
              type="button"
              id="buttonExcluir"
            />
            <Button
              title="Salvar Alterações"
              type="button"
              id="buttonESla"
            />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  );
}
