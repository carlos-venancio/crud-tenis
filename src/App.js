// import FullScreen from "./components/Full_Screen"
import Header from "./components/Header"
import Footer from "./components/Footer"
// reaproveitando a estrutura
import { Outlet } from "react-router-dom";
// import Products from "./components/products"



function App() {
 
  return (
    <div className="">
    <Header/>
    
    <Outlet/>

    {/* <Products/> */}
    <Footer/>

    </div>
  );
}

export default App;
