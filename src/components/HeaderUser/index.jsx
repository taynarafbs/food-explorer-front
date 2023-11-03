import { FiLogOut } from "react-icons/fi";
import { TfiReceipt } from "react-icons/tfi";

import Polygon from "../../assets/polygon1.png";

import { Button } from "../Button";

import { SearchInput } from "../SearchInput";
import { Container, Logout } from "./styles";

export function HeaderUser({ handleSearch }) {

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
        </div>
        <div className="input">
          <SearchInput />
        </div>
      </div>
      <Button
        className="newPlate"
        title="Pedidos"
        icon={TfiReceipt}
      />

      <Logout>
        <FiLogOut />
      </Logout>

    </Container>
  );

};




