import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiEdit2, FiMinus, FiPlus } from "react-icons/fi";

import { Button } from "../Button";
import { Container, } from "./styles";
import { api } from "../../services/api";

/*
todo:
- OK - fazer o wrapper pra nao ficar so em uma linha
- OK - fazer o controle do amount correlacionado com o prato (pode ser o pedido mermo) +1 -1 nao mudar em todos
- fazer o controle de detalhes do prato (favoritado?)
- formacao de preço
- rota de edicao
- botao favorito ser um toggle (liga e desliga)
*/

export default function Card({ data, i, isAdmin }) {
  const [quantity, setQuantity] = useState(0);
  // const [isFavorite, setIsFavorite] = useState(false);

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  }



  /*
  EXPRESSOES CONDICIONAIS
  1 - {condicao && o que executa}
  2 - {condicao ? faca isso : ou isso} - operador ternario
  2.1 - é a mesma coisa que fazer:
   if (condicao) {
    faca isso
   } else {
    ou isso
   }
  */

  const FavButton = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    const handleToggle = () => {
      setIsFavorite(!isFavorite)
    }
    return (
      <button className="favorite" type="button" onClick={handleToggle}>
        {
          isFavorite ? <AiFillHeart color="#FFFFFF" size={24} />
            : <AiOutlineHeart color="#FFFFFF" size={24} />
        }
      </button >
    );
  }

  return (
    <Container key={i}>
      {
        isAdmin &&
        <div className="icon">
          <FiEdit2 />
        </div>
      }
      <FavButton />

      <div className="clickplate">
        <button className="imgPlate" type="button">
          <img src={`${api.defaults.baseURL}/files/${data.img}`} alt="imagem do prato" />
        </button>
      </div>
      <div className="plates">
        <div className="informations">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <h5>R$ {data.price}</h5>

          <div className="includePlates">
            <div className="decreaseOrAdd">
              <FiMinus type="button" onClick={handleDecrease} />
              <span>{quantity}</span>
              <FiPlus type="button" onClick={handleIncrease} />
            </div>
            <Button className="dishAdd" title="incluir" />
          </div>
        </div>
      </div>
    </Container>
  )

}