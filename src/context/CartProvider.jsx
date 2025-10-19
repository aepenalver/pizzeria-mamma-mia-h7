import { createContext, useContext, useState } from "react";

// Inicialización del Contexto
export const CartContext = createContext();

// Hook personalizado para simplificar el uso y evitar importar useContext y CartContext en cada componente
export const useCart = () => {
  return useContext(CartContext);
};

// Componente Proveedor
export const CartProvider = ({ children }) => {
  // Estado del carrito
  const [pizzas, setPizzas] = useState([]);

  // Función para añadir una pizza al carrito desde el componente "Home"
  const addToCart = (pizzaToAdd) => {
    // Busca si la pizza ya existe en el carrito
    const existingPizza = pizzas.find((item) => item.id === pizzaToAdd.id);

    if (existingPizza) {
      // Si existe, incrementa su cantidad
      setPizzas(pizzas.map((item) => (item.id === pizzaToAdd.id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      // Si no existe, la añade con cantidad inicial de 1
      setPizzas([...pizzas, { ...pizzaToAdd, qty: 1 }]);
    }
  };

  // Función para actualizar la cantidad (usada por el componente Cart para +/-)
  // 'ops' será 1 para incrementar y -1 para decrementar
  const updateQty = (id, ops) => {
    setPizzas((prev) =>
      prev
        .map((pizza) =>
          // Modifica la cantidad de la pizza con el "id" correspondiente
          pizza.id === id ? { ...pizza, qty: pizza.qty + ops } : pizza
        )
        // Filtra para remover pizzas cuya cantidad llegue a 0
        .filter((pizza) => pizza.qty > 0)
    );
  };

  // Cálculo de "total" para que pueda ser compartido
  const total = pizzas.reduce((acc, pizza) => acc + pizza.price * pizza.qty, 0);

  // El objeto de valor que se compartirá con todos los consumidores
  const contextValue = {
    // El array de pizzas en el "cart"
    pizzas,
    // El "total" de la compra
    total,
    // Función para agregar desde "Home"
    addToCart,
    // Función para +/- desde "Cart"
    updateQty,
  };

  return (
    <>
      <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
    </>
  );
};

// export default CartProvider;
