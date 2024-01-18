import { Link } from 'react-router-dom';

import { Container, Form, Background } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import Polygon from "../../assets/Polygon1.png";


export function SignIn() {
  return (
    <Container>
      <Background>
        <img src={Polygon} alt="Logo_hexagon" />
        <h1>food explorer</h1>
      </Background>

      <Form>
        <h1>Faça login</h1>

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


        <Button title={'ENTRAR'} background={'#750310'} />

        <Link to="/signup" >Criar uma conta</Link>

      </Form>
    </Container>
  );
}