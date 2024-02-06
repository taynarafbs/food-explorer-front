import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import { api } from "../../services/api";

import { Container, Form, Background } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import Polygon from "../../assets/polygon1.png";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso!");
                navigate("/");
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível cadastrar");
                }
            });
    }

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
                        placeholder="Exemplo: Maria da Silva"
                        type="text"
                        name="name"
                        id="name"
                        onChange={e => setName(e.target.value)}
                    />
                </label>

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

                <Button title={'Criar conta'} onClick={handleSignUp} />
                <Link to="/" >Já tenho uma conta</Link>
            </Form>
        </Container>
    );
}