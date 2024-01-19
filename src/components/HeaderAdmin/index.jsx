import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";
import Polygon from "../../assets/polygon1.png";

import { Button } from "../Button";

import { SearchInput } from "../SearchInput";
import { Container, Logout } from "./styles";

export function HeaderAdmin({ handleSearch }) {
    const { signOut } = useAuth();

    return (
        <Container>
            <div className="menu">
                olá!
            </div>
            <div className="test">
                <div className="admin">
                    <div className="logo">
                        <img src={Polygon} alt="" />
                        <h3>food explorer</h3>
                    </div>
                    <p>admin</p>
                </div>

                <div className="input">
                    <SearchInput />
                </div>
            </div>

            <Button
                className="newPlate"
                title="Novo Prato"
            />

            <Logout onClick={signOut}>
                <FiLogOut />
            </Logout>

        </Container>
    );

};



