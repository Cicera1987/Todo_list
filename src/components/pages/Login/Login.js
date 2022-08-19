import * as React from "react";
import { useEffect, useState } from "react";
import { FormLogin, LoginEnter, LabelContainer, ContainerTitleLogin } from "./style";
import { ButtonLogin } from "../../atoms/Buttons/ButtonLogin/style";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://todolistdesafio.com.br'
})



const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState(null)
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { email: email, password: password }
    let tempList = users
    localStorage.setItem("users", JSON.stringify(tempList))
    http.post('/api/users', data).then(res => {
      setUsers(res.data.users)
    }).catch(err => setErr(err))
  }

  useEffect(() => {
    if (users) {
      navigate("/Todolist")
    }
  }, [users])


  return (
    <LoginEnter>
      <ContainerTitleLogin>Entrar</ContainerTitleLogin >
      <FormLogin>
        <LabelContainer>
          <span>E-mail: </span>
          <input
            type="email"
            name="email"
            id="emil"
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
            id="password"
            required
            placeholder="Insira sua Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </LabelContainer>
      </FormLogin>
      <ButtonLogin onClick={handleSubmit}>Login</ButtonLogin>
    </LoginEnter>

  );
};

export default Login;