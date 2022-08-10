import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { FormLogin, LoginEnter, LabelContainer, ContainerTitleLogin } from "./style";
import { ButtonLogin } from "../../atoms/Buttons/ButtonLogin/style";


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({ email: email, password: password }),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    }).then((res) => res.json())
      .then((json) => {
        setUsers(json.users)
        console.log(json)
      })
      .catch(err => console.log(err))

  };



  return (
    <LoginEnter>
      <ContainerTitleLogin>Entrar</ContainerTitleLogin >
      <FormLogin>
        <LabelContainer>
          <span>E-mail: </span>
          <input
            type="email"
            name="email"
            required
            placeholder="Insira seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </LabelContainer>
        <LabelContainer>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </LabelContainer>
      </FormLogin>
      <ButtonLogin onClick={handleSubmit}><Link to="/TodoList">Login </Link></ButtonLogin>
    </LoginEnter>

  );
};

export default Login;