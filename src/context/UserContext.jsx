import { createContext, useContext, useState } from "react";

// Inicialización del Contexto
export const UserContext = createContext();

// Hook personalizado para simplificar el uso y evitar importar useContext y UserContext en cada componente
export const useUser = () => {
  return useContext(UserContext);
};

// Componente Proveedor
const UserProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  const contextValue = {
    token,
    setToken,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserProvider;
