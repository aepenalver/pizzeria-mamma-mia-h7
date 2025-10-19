import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavMenu from "../components/Navbar";
import PizzaDetails from "../components/PizzaDetails";
import { useAPI } from "../context/ApiContext";

const Pizza = () => {
  // Estado local para la pizza específica que se va a mostrar
  const [pizza, setPizza] = useState(null);
  // Obtenemos la lista completa de pizzas del contexto
  const { pizzas } = useAPI();

  // Obtenemos el id de la pizza desde la URL
  const { id } = useParams();
  // useEffect para encontrar la pizza correcta cuando el "id" o la lista de "pizzas" cambien
  useEffect(() => {
    // Buscamos la pizza que coincide con el id de la URL
    const pizzaData = pizzas.find((p) => p.id === id);

    // Si se encuentra una pizza, se actualiza el estado local
    if (pizzaData) {
      setPizza(pizzaData);
    }
  }, [id, pizzas]); // Se ejecuta si "id" o "pizzas" cambian

  // Si "pizza" es null el componente retorna y no intenta ejecutar el código que causa el error.
  if (!pizza) {
    return <p className="text-center mt-5">Cargando detalles de la pizza...</p>;
  }

  return (
    <>
      <NavMenu />
      {/* Renderiza el componente de detalles pasando los datos de la pizza como props */}
      <PizzaDetails key={pizza.id} description={pizza.desc} id={pizza.id} img={pizza.img} ingredients={pizza.ingredients} name={pizza.name} price={pizza.price} />
    </>
  );
};

export default Pizza;
