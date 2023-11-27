// import FullScreen from "./components/Full_Screen"
import Header from "./components/Header"
import Footer from "./components/Footer"

// reaproveitando a estrutura
import { Outlet } from "react-router-dom";

function App() {
 
  return (
    <div className="App">
    <Header/>
    
    <Outlet/>
    
    <Footer/>

    </div>
  );
}

export default App;
