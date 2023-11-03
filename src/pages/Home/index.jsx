
import { HeaderAdmin } from '../../components/HeaderAdmin';

import FoodImg from '../../assets/FoodImage.png';


import { Footer} from '../../components/Footer';
import { Container, Form } from './styles';

export function Home() {
    return (
        <Container>
            <HeaderAdmin />
            
            <Form>
                <div className="ImageHome">
                    <img className="imageHeader" src={FoodImg} alt="FoodImage"/>
                    <div className="description">
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                    </div>
                </div>

            </Form>
            <Footer />
        </Container>
    );
}