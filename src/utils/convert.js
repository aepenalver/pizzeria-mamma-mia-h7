// Función  para dar formato de moneda a un número
const convertedAmount = (amount) => {
  // Convierte el valor a un número y luego usa toLocaleString() para aplicar el formato de separadores de miles
  return Number(amount).toLocaleString();
};

export default convertedAmount;
