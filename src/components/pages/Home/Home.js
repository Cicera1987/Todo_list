import { Link } from "react-router-dom"
import {ContainerHome, ContainerTitle} from './style'
import { ButtonLogin } from '../../atoms/Buttons/ButtonLogin/style';


const handleSubmit = async (e) => {
  e.preventDefault()
  const iniciar = {
   Home:"Iniciar"

  }
  console.log(iniciar)
};
const Home = () => {
  return (
    <>
    <ContainerTitle >Organize sua lista de tarefas!</ContainerTitle >
    <ContainerHome>
        <ButtonLogin onClick={handleSubmit}><Link to="/Login">Iniciar</Link></ButtonLogin>
      </ContainerHome>
    </>
  );
};

export default Home;