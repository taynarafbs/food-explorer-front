import { Container, Form, Search } from "./styles";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { useAuth } from "../../hooks/auth";

export function Menu({  isAdmin }) {
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

  return (
    <Container>
        <Form>
            <div className="header">
                <button onClick={handleHome}>
                    <AiOutlineClose size={28} />
                </button>
                <span>Menu</span>
            </div>

            <Search>
                <AiOutlineSearch size={24} />
                <input
                    type="search"
                    placeholder="Busque por pratos ou ingredientes"
                />
            </Search>
    
            { isAdmin ?
                    <Link onClick={handleAddDish}>Novo prato</Link>:
            <Link onClick={handleSignOut}>Sair</Link>}
            
        </Form>
      
      <Footer />
    </Container>
  )
}