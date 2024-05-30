import "./style.css";

export function Login() {
  return (
    <section className="login-section">
      <div className="form-login-container">
        <form className="form" action="">
          <div className="form__input-container">
            <label htmlFor="user">Usuário:</label>
            <input type="text" id="user" required />
          </div>
          <div className="form__input-container">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" required />
          </div>
          <button className="form__submit-button" type="submit">Entrar</button>
        </form>
      </div>
    </section>
  );
}