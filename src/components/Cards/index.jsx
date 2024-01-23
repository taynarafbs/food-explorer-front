import { useEffect, useState, forwardRef } from "react";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiEdit2, FiMinus, FiPlus } from "react-icons/fi";


import { Button } from "../Button";
import { Container } from "./styles";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

export function Cards() {
    const [dishes, setDishes] = useState([]);
    const [counter, setCounter] = useState(0);
    const [counterObj, setCounterObj] = useState([]);
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
            {dishes && dishes.map((dish, i) => (
                <Container key={i}>
                    {user.admin &&
                        <div className="icon">
                            <FiEdit2 />
                        </div>}
                    <button className="favorite" type="button">
                        <AiFillHeart color="#FFFFFF" size={24} />
                        <AiOutlineHeart color="#FFFFFF" size={24} />
                    </button>

                    <div className="clickplate">
                        <button className="imgPlate" type="button">
                            <img src={`${api.defaults.baseURL}/files/${dish.img}`} alt="imagem do prato" />
                        </button>
                    </div>
                    <div className="plates">
                        <div className="informations">
                            <h1>{dish.title}</h1>
                            <p>Massa fresca com camarões e pesto</p>
                            <h5>R$ 79,97</h5>

                            <div className="includePlates">
                                <div className="decreaseOrAdd">
                                    <FiMinus type="button" onClick={() => setCounter(counter - 1)} />
                                    <span>{counter.toString().padStart(2, '0')}</span>
                                    <FiPlus type="button" onClick={() => setCounter(counter + 1)} />
                                </div>
                                <Button className="dishAdd" title="incluir" />
                            </div>
                        </div>
                    </div>
                </Container>
            ))}
        </>
    );
}


