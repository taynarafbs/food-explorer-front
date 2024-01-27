import { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiEdit2, FiMinus, FiPlus } from "react-icons/fi";

import { Button } from "../Button";
import { Container, } from "./styles";
import { api } from "../../services/api";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

/*
todo:
- OK - fazer o wrapper pra nao ficar so em uma linha
- OK - fazer o controle do amount correlacionado com o prato (pode ser o pedido mermo) +1 -1 nao mudar em todos
- OK - fazer o controle de detalhes do prato (favoritado?)
- OK botao favorito ser um toggle (liga e desliga)
- OK - formacao de preço
- rota de edicao
*/

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

export default function Card({ data, i }) {
  const { isAdmin } = useAuth();
  const [quantity, setQuantity] = useState(0);

  function handleEditDish() {
    navigate("/edit");
  }



  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  }

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
  const navigate = useNavigate();

  return (

    <Container key={i}>
      {isAdmin ? (
        <div className="icon" title="iconEdit" onClick={handleEditDish}>
          <FiEdit2 />
        </div>
      ) : (
        <FavButton />
      )}

      <div className="clickplate" onClick={() => navigate(`/dish/${data.id}`, { state: { data } })}>
        <button className="imgPlate" type="button">
          <img src={`${api.defaults.baseURL}/files/${data.img}`} alt="imagem do prato" />
        </button>
      </div>

      <div className="plates">
        <div className="informations">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <h5>R$ {data.price}</h5>

          {!isAdmin && (
            <div className="includePlates">
              <div className="decreaseOrAdd">
                <FiMinus type="button" onClick={handleDecrease} />
                <span>{quantity}</span>
                <FiPlus type="button" onClick={handleIncrease} />
              </div>
              <Button className="dishAdd" title="incluir" />
            </div>
          )}

        </div>
      </div>
    </Container>
  )

}