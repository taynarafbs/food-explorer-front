
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiEdit2, FiMinus, FiPlus } from "react-icons/fi";

import Food2 from '../../assets/Food2.png';

import { Button } from "../Button";
import { Container } from "./styles";

export function Cards(){
    return (
        <Container>
            <div className="icon">
                <FiEdit2/>
            </div>
            <button className="favorite" type="button">
                <AiFillHeart color="#FFFFFF" size={24} />
                <AiOutlineHeart color="#FFFFFF" size={24} />
            </button>

            <div className="clickplate">
                <button className="imgPlate" type="button">
                    <img src={Food2} alt="imagem do prato" />
                </button>
            </div>


            <div className="plates">
                <div className="informations">
                    <h1>Spaguetti Gambe</h1>
                    <p>Massa fresca com camarões e pesto</p>
                    <h5>R$ 79,97</h5>
                            
                    <div className="includePlates">
                        <div className="decreaseOrAdd">
                            <FiMinus type="button" />
                            <span>01</span>
                            <FiPlus type="button" />
                    </div>
                    <Button className="dishAdd" title="incluir" />
                    </div>
                </div>
            </div>
        </Container>
    );
}


