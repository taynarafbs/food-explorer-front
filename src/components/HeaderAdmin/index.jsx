import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import Polygon from "../../assets/polygon1.png";
import { Button } from "../Button";

import { SearchInput } from "../SearchInput";
import { Container, Logout } from "./styles";

export function HeaderAdmin({ handleSearch }) {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    function handleSignOut() {
        navigate("/");
        signOut();
    }

    function handleAddDish() {
        navigate("/add");
    }

    function handleHome() {
        navigate("/");
    }

    function handleMenu() {
        navigate("/menu");
    }


    return (
        <Container>
            <div className="menu">
                <AiOutlineMenu size={24} onClick={handleMenu} />
            </div>
            <div className="test">
                <div className="admin">
                    <div className="logo" title="Logo" onClick={handleHome}>
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
                onClick={handleAddDish}
            />

            <Logout onClick={handleSignOut}>
                <FiLogOut />
            </Logout>

        </Container>
    );

};