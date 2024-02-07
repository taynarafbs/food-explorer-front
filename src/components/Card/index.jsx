import { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiEdit2, FiMinus, FiPlus } from "react-icons/fi";

import { Button } from "../Button";
import { Container, } from "./styles";
import { api } from "../../services/api";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import DefaultImg from "../../assets/default-plate.jpg"


export default function Card({ data, i }) {
  const { isAdmin } = useAuth();
  const [quantity, setQuantity] = useState(0);

  function handleEditDish(id) {
    navigate(`/edit/${id}`);
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
        <div className="icon" title="iconEdit" onClick={() => handleEditDish(data.id)}>
          <FiEdit2 />
        </div>
      ) : (
        <FavButton />
      )}

      <div className="clickplate" onClick={() => navigate(`/dish/${data.id}`, { state: { data } })}>
        <button className="imgPlate" type="button">
          {data.img
            ? <img src={`${api.defaults.baseURL}/files/${data.img}`} alt="imagem do prato" />
            : <img src={DefaultImg} alt="imagem do prato" />
          }
          
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