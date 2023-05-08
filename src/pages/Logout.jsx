import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// const Logout = () => {
  const Logout = ({ gestionarLogout }) => {
  const navegar = useNavigate();
  useEffect(() => {
    gestionarLogout();
    localStorage.removeItem("datosUsuario");
    navegar("/login");
  }, []);
  return <h1>Logged out...</h1>;
};

export default Logout;
