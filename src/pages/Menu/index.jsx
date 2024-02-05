import { Container, Form, Search } from "./styles";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { useAuth } from "../../hooks/auth";

export function Menu({  }) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

    async function handleSignOut() {
        await signOut();
        navigate("/");
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
    

            <Link to="/add">Novo prato</Link>
            
            <Link onClick={handleSignOut}>Sair</Link>
            
        </Form>
      <Footer />
    </Container>
  )
}