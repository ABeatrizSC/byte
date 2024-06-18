import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import useService from "../../../hooks/useService";

export function Login() {
  const navigate = useNavigate();
  const { login } = useService();
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await login({ email, password });
    console.log(response);

    if (response.ok) {
      navigate("/admin/products");
    } else {
      setWrong(true);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrong, setWrong] = useState(false);

  return (
    <section className="login-section">
      <div className="form-login-container">
        <form className="form" action="" onSubmit={handleLogin}>
          <div className="form__input-container">
            <label htmlFor="user">Usuário:</label>
            <input
              type="text"
              id="user"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form__input-container">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          {wrong && <p>Usuário ou senha incorretos</p>}
          <button
            className="form__submit-button"
            type="submit"
            onSubmit={handleLogin}
          >
            Entrar
          </button>
        </form>
      </div>
    </section>
  );
}
