import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
import NavMenu from "../components/Navbar";
import { useAPI } from "../context/ApiProvider";

const Home = () => {
  const { pizzas } = useAPI();

  return (
    <>
      <NavMenu />
      <Header />
      <section className="d-flex gap-5 p-4 justify-content-evenly">
        {/* Map de lista de pizzas obtenida (newPizzas) y renderiza un "CardPizza" por cada una */}
        {/* El operador "?" previene errores si "newPizzas" es "null" o "undefined" antes de cargar */}
        {pizzas?.map((pizza) => (
          // Propiedades de la pizza como props a "CardPizza"
          <CardPizza key={pizza.id} description={pizza.desc} id={pizza.id} img={pizza.img} ingredients={pizza.ingredients} name={pizza.name} price={pizza.price} />
        ))}
      </section>
    </>
  );
};

export default Home;
