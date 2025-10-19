import { createContext, useContext, useEffect, useState } from "react";

// Inicialización del Contexto
export const ApiContext = createContext({
  pizzas: [],
  isLoading: true,
  error: null,
  setPizzas: () => {},
});

// Hook personalizado para simplificar el uso y evitar importar "useContext" y "CartContext" en cada componente
export const useAPI = () => {
  return useContext(ApiContext);
};

// Componente Proveedor
const ApiProvider = ({ children }) => {
  // Estado para almacenar las pizzas
  const [pizzas, setPizzas] = useState([]);
  // Estado para manejar la carga
  const [isLoading, setIsLoading] = useState(true);
  // Estado para manejar errores
  const [error, setError] = useState(null);

  // URL de API (Backend)
  const url = `http://localhost:5000/api/pizzas`;

  // Función para obtener datos de API con manejo de errores
  const getData = async () => {
    // Inicia el estado de carga
    setIsLoading(true);
    // Limpia errores previos
    setError(null);
    try {
      const res = await fetch(url);

      // Comprueba si la respuesta es un  error
      if (!res.ok) {
        throw new Error(`Error HTTP: Estado ${res.status}`);
      }

      const data = await res.json();
      setPizzas(data);
    } catch (err) {
      console.error("Error al obtener datos de la API:", err.message);
      setError("No se pudieron cargar los datos. Verifique que el backend esté activo.");
      // Asegura que el estado de pizzas sea un array vacío en caso de fallo
      setPizzas([]);
    } finally {
      // Finaliza el estado de carga
    }
    setIsLoading(false);
  };

  // useEffect para llamar a "getData()" solo una vez al montar el componente
  useEffect(() => {
    getData();
  }, []);

  // Valores proporcionados al Contexto
  const contextValue = {
    pizzas,
    setPizzas,
    isLoading,
    error,
  };

  return <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>;
};

export default ApiProvider;
