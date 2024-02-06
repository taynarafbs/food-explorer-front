import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import Polygon from "../../assets/polygon1.png";

import { Container, Form, Background } from './styles';

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password })
  }


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
            onChange={e => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="senha">
          Senha
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            name="senha"
            id="senha"
            onChange={e => setPassword(e.target.value)}
          />
        </label>

        <Button title={'ENTRAR'} onClick={handleSignIn} />

        <Link to="/signup" >Criar uma conta</Link>

      </Form>
    </Container>
  );
}