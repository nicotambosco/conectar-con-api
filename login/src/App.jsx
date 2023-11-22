import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./componentes/login";
import ForgotPassword from "./componentes/ForgotPassword";
import Token from "./componentes/Token";
import "./index.css";
import "./app.css";
const App = () => {
  return (
    <BrowserRouter>
      <Token>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                hacer logica de ver si hay token o no para que te redireccione
                al dashboard o al login
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Token>
    </BrowserRouter>
  );
};
export default App;
