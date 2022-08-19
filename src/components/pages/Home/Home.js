import {ContainerHome, ContainerTitle} from './style'
import { ButtonLogin } from '../../atoms/Buttons/ButtonLogin/style';
import { StyleLink } from '../../atoms/StyleLink/style';


const handleSubmit = async (e) => {
  e.preventDefault()

}

const Home = () => {

  return (
    <>
    <ContainerTitle >Organize sua lista de tarefas!</ContainerTitle >
    <ContainerHome>
      
        <ButtonLogin onClick={handleSubmit}><StyleLink to="/login">Login</StyleLink></ButtonLogin>
      </ContainerHome>
    </>
  );
};

export default Home;