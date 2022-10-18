import { useState } from "react";
import Article from "../components/Article";

const Admin = () => {
  const [auth, setAuth] = useState(false);

  const validatePassword = (event) => {
    event.preventDefault();
    const password = document.getElementById("password").value;

    if (password === "123") {
      setAuth(true);
    } else {
      alert("Wrong password");
    }
  };

  return auth ? (
    <Article />
  ) : (
    <div>
      <form onSubmit={validatePassword}>
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" required />
        <input type="submit" value="Entrar" />
      </form>
    </div>
  );
};

export default Admin;
