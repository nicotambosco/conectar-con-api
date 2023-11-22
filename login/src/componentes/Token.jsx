const Token = ({ children }) => {
  console.log("Estoy en todos lados");
  const tokenFromLocalStorage = get.tokenFromLocalStorage("token");
  if (tokenFromLocalStorage) {
    // navega a dashboard
  } else {
    // navega al login
  }
  return <>{children}</>;
};
export default Token;
