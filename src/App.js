import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from "./Components/Home";
import Main from "./Components/Main";
import Cart from "./Components/Cart";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App w-screen   min-h-screen max-h-*">

    
      <NavBar className=" w-screen"/>



      <Routes>
        <Route path='/' element={<Main/>}>
        <Route index element={<Home/>}/>
          <Route path='/Cart' element={<Cart/>}/>

        </Route>
      </Routes>

    </div>
  );
}

export default App;
