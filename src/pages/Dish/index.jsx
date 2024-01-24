import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";

import { FiChevronLeft, FiMinus, FiPlus } from "react-icons/fi";
import { Container, Form } from "./styles";

import { Button } from '../../components/Button';
import { Footer } from "../../components/Footer";

import { HeaderUser } from "../../components/HeaderUser";


export function Dish() {

  /*
  - chama pela api direto dishes/show/:id
  - usar o use effect mermo
  - useState usando o dish e setDish (singular pq vc ta dentro do detalhe)
  - colocar as informacoes especificas aqui dentro
  
  dica:
  - use effect é o hook para ciclo de vida do react
  */

  const navigate = useNavigate();
  const { state } = useLocation();
  const { data } = state;
  const params = useParams();

  const [quantity, setQuantity] = useState(0);

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  }



  return (
    <Container>
      <HeaderUser />
      <Form>
        <button className="goBack" type="button" onClick={() => navigate(-1)}>
          <FiChevronLeft />
          <h5>voltar</h5>
        </button>
        <main>
          <img src={`${api.defaults.baseURL}/files/${data.img}`} alt="imagem do prato" />

          <div className="dishInformation">
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            <div className="tags">
              <Button title="tag ingredientes" />
            </div>

            <div className="quantity">
              <div className="decreaseOrAdd">
                <FiMinus type="button" onClick={handleDecrease} />
                <span>{quantity}</span>
                <FiPlus type="button" onClick={handleIncrease} />
              </div>
              <Button className="dishAdd" title="incluir R$:">
                <p>{data.price * quantity}</p>
              </Button>
            </div>
          </div>
        </main>
      </Form>
      <Footer />
    </Container>
  );
}
