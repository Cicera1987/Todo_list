
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login"
import Header from "./components/organisms/Header";
import TodoList from './components/pages/TodoList/TodoList'
import Footer from "./components/organisms/Footer/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Header/>
      <div className="container">
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login/" element={<Login/>} />
        <Route path="/todolist" element={<TodoList/>}/>
        </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
