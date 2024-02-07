import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiChevronLeft, FiTrash } from "react-icons/fi";

import { Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { api } from "../../services/api";
import { TextArea } from "../../components/TextArea";
import { BsUpload } from "react-icons/bs";


export function EditDish() {
  const navigate = useNavigate();
  const params = useParams();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("Refeições");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState(null);

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    async function fetchDish() {
      setShowLoading(true);
      try {
        const response = await api.get(`/dishes/${params.id}`);

        const dish = response.data;

        setTitle(dish.title);
        setType(dish.type);
        setPrice(dish.price);
        setImg(dish.img);
        setIngredients(dish.ingredients.map(ingredient => ingredient.name));
        setDescription(dish.description);
        setShowLoading(false);
      } catch (error) {
        setShowLoading(false);
      }
    }

    fetchDish();
  }, [])

  const handleImg = (e) => {
    const file = e.target.files[0];

    setImg(file);
  };

  const handleSubmit = () => {
    console.log(
      'submit:',
      {title},
      {price},
      {type},
      {description},
      {ingredients},
      {img}
    )
    if (!title || !price || !type || !description|| !img) {
      return alert("Preencha todos os campos!");
  }

  api.put(`/dishes/${params.id}`, { title, price, type, description, ingredients })
      .then(() => {
          alert("Prato editado com sucesso!");
          navigate(-1);
      })
      .catch(error => {
          if (error.response) {
              alert(error.response.data.message);
          } else {
              alert("Não foi possível editar o prato");
          }
      });
  }

  const handleDelete = () => {
    if (confirm("Certeza que quer excluir?") == true) {
      api.delete(`/dishes/${params.id}`).then(() => {
        alert("Prato removido com sucesso");
        navigate("/");
      });
    }
  }


  return (
    <Container>
      <HeaderAdmin />
      <main>
        <Form>
          <header>
            <button className="goBack" type="button" onClick={() => navigate(-1)}>
              <FiChevronLeft />
              voltar
            </button>
          </header>
          <h1>Editar prato</h1>
          <div className="FirstInformation">
            <div className="dishImage">
              <h5>Imagem do prato</h5>
              <div className="image">
                <label htmlFor="inputImage">
                  <Input
                      icon={BsUpload}
                      type="file"
                      name="inputImage"
                      id="inputImage"
                      onChange={handleImg}
                    /> 
                </label>
              </div>
            </div>

            <div className="name">
              <h5>Nome</h5>
              <Input
                type="text"
                placeholder="Ex.:Salada Ceasar"
                id="name"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="category">
              <h5>Categoria</h5>
              <select 
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                <option value="Refeições">Refeições</option>
                <option value="Sobremesas">Sobremesas</option>
                <option value="Bebidas">Bebidas</option>
              </select>
            </div>
          </div>

          <div className="additionalInformation">
          <div className="ingredients">
              <h5>Ingredientes</h5>
              <Input
                id="adicionar"
                type="text"
                placeholder="Adicionar"
                name="adicionar"
                value={newIngredient}
                onKeyDown={function(e){
                  if (e.keyCode === 13) {
                    const ingredientList = ingredients;
                    ingredientList.push(newIngredient)
                    setNewIngredient("");
                    setIngredients(ingredientList);
                  }
                }}
                onChange={(e) => setNewIngredient(e.target.value)}
              />
              {ingredients && ingredients.map((valor, i) => (
                <p key={i}>
                  {valor}
                  <FiTrash onClick={() => {
                    const newIng = ingredients.filter((v) => v != valor)
                    setIngredients(newIng)
                  }} />
                </p>
              ))}
            </div>
            <div className="price">
              <h5>Preço</h5>
              <Input
                id="price"
                type="text"
                placeholder="R$ 00,00"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="description">
            <h5>Descrição</h5>
            <TextArea
              id="descricao"
              type="text"
              rows={3}
              cols={100}
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              name="descricao"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="button">
            <Button
              title="Excluir prato"
              type="button"
              id="buttonExcluir"
              onClick={handleDelete}
            />
            <Button title={'Salvar alterações'} onClick={handleSubmit} />
          </div>
        </Form>
      </main>
      <Footer />
      {showLoading}
    </Container>
  );
}
