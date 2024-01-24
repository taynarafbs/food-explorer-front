import { useEffect, useState } from "react";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiEdit2, FiMinus, FiPlus } from "react-icons/fi";


import { Button } from "../Button";
import { Container, Wrapper, } from "./styles";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

const Card = ({ data, i, isAdmin }) => {
    const [quantity, setQuantity] = useState(1);
    function handleDecrease() {
        if (quantity <= 1) {
            setQuantity(1);
            return alert("Quantidade mínima é 1");
        }
        setQuantity(quantity - 1);
        return null;
    }

    function handleIncrease() {
        setQuantity(quantity + 1);
    }
    return (
        <Container key={i}>
            {
                isAdmin &&
                <div className="icon">
                    <FiEdit2 />
                </div>
            }
            < button className="favorite" type="button" >
                <AiFillHeart color="#FFFFFF" size={24} />
                <AiOutlineHeart color="#FFFFFF" size={24} />
            </button >

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

export function Cards() {
    const [dishes, setDishes] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        async function fetchDishes() {
            const token = localStorage.getItem("@foodexplorer:token");
            if (token && user) {
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const { data } = await api.get("/dishes?user_id=" + user.id);
                setDishes(data);
            }
        }
        fetchDishes();
    }, [user]);

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
        <>

            <Wrapper>

                {dishes && dishes.map((dish, i) => (
                    <Card data={dish} key={i} isAdmin={user.admin} />
                ))}
            </Wrapper>

        </>
    );
}


