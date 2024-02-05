import { FiLogOut } from "react-icons/fi";
import { TfiReceipt } from "react-icons/tfi";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import Polygon from "../../assets/polygon1.png";

import { Button } from "../Button";

import { SearchInput } from "../SearchInput";
import { Container, Logout } from "./styles";

export function HeaderUser({ handleSearch }) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
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
        </div>
        <div className="input">
          <SearchInput handleSearch={handleSearch} />
        </div>
      </div>
      <Button
        className="newPlate"
        title="Pedidos (0)"
        icon={TfiReceipt}
      />

      <Logout onClick={handleSignOut}>
        <FiLogOut />
      </Logout>

    </Container>
  );

};




