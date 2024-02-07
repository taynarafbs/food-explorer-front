import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";

import { FiChevronLeft, FiMinus, FiPlus } from "react-icons/fi";
import { Container, Form } from "./styles";

import { Button } from '../../components/Button';
import { Footer } from "../../components/Footer";

import { HeaderUser } from "../../components/HeaderUser";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Tag } from "../../components/Tag"; 

import { useAuth } from "../../hooks/auth";

export function Dish() {

  const { isAdmin } = useAuth();
  const navigate = useNavigate();

  const { state } = useLocation();
  const { data } = state;

  const [quantity, setQuantity] = useState(0);
  const [currentTotal, setCurrentTotal] = useState(0);
  const [formattedPrice, setFormattedPrice] = useState(0);
  const [dishDetails, setDishDetails] = useState([]);

  useEffect(() => {
    async function fetchDishes() {
        const token = localStorage.getItem("@foodexplorer:token");
        if (token && data) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const dish = await api.get(`/dishes/${data.id}`);
            setDishDetails(dish.data);
        }
    }
    fetchDishes();
}, [data]);

  const parsePrice = (price) => {
    return parseFloat((parseFloat(price).toFixed(2)));
  }

  useEffect(() => {
    if (data && data.price && !formattedPrice) {
      const priceString = typeof data.price === 'string' ? data.price.toString() : data.price.toString();
      const resultCalc = parsePrice(priceString.replace(',', '.'));
      setFormattedPrice(resultCalc);
    }
  }, [data]);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    const newTotal = parsePrice(currentTotal + formattedPrice);
    setQuantity(newQuantity);
    setCurrentTotal(newTotal);
  }

  const handleDecrease = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      const newTotal = parsePrice(currentTotal - formattedPrice);
      setQuantity(newQuantity);
      setCurrentTotal(newTotal);
    }
  }



  return (
    <Container>
      {isAdmin ? (
        <HeaderAdmin />
      ) : (
        <HeaderUser />
      )}
      
      <Form>
        <button className="goBack" type="button" onClick={() => navigate(-1)}>
          <FiChevronLeft />
          <h5>voltar</h5>
        </button>
        <main>
          <img src={`${api.defaults.baseURL}/files/${data.img}`} alt="imagem do prato" />

          <div className="dishInformation">
            <h1>{dishDetails.title}</h1>
            <p>{dishDetails.description}</p>

            {
              dishDetails.ingredients &&
                <div className="tags">
                  {dishDetails.ingredients.map((ingredient) => {
                    return <Tag key={ingredient.id} value={ingredient.name} isFixed />
                  })}
                </div>
            }

            {isAdmin ? (
              <div className="dishEdit">
                <Button title="Editar prato" onClick={()=> navigate(`/edit/${data.id}`)} />
              </div>
            ) : (
              <div className="quantity">
                <div className="decreaseOrAdd">
                  <FiMinus type="button" onClick={handleDecrease} />
                  <span>{quantity}</span>
                  <FiPlus type="button" onClick={handleIncrease} />
                </div>
                <Button className="dishAdd" title="incluir ∙ R$:">
                  <p>{currentTotal === 0 ? formattedPrice.toLocaleString('pt-BR') : currentTotal.toLocaleString('pt-BR')}</p>
                </Button>
              </div>
            )}

          </div>
        </main>
      </Form>
      <Footer />
    </Container>
  );
}
