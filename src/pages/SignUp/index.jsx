import { Container, Form, Background} from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import Polygon from "../../assets/Polygon1.png";

export function SignUp () {
  return (
     <Container>
          <Background>
                <img src={Polygon} alt="Logo_hexagon" />
                <h1>food explorer</h1>
          </Background>

          <Form>
                <h1>Crie sua conta</h1>

                <label htmlFor="name">
                 Seu nome
                <Input
                    placeholder="Exemplo:Maria da Silva"
                    type="text"
                    name="name"
                    id="name"
                />
                </label>

                <label htmlFor="email">
                 Email
                <Input
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                    name="email"
                    id="email"
                />
                </label>

                <label htmlFor="senha">
                 Senha
                <Input
                    placeholder="No mínimo 6 caracteres"
                    type="password"
                    name="senha"
                    id="senha"
                />
                </label>

                <Button title={'CRIAR CONTA'} background={'#750310'} />
                <a href="#">Já tenho uma conta</a>
           </Form>
      </Container>
   );
}