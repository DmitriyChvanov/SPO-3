import { BrowserRouter } from "react-router-dom";
import MyHeader from "./components/header/MyHeader";
import MainPage from "./pages/main/MainPage";
import "./reset.css"
import AppRouter from "./components/AppRouter";
import MyFooter from "./components/MyFooter/MyFooter";

function App() {
  return (
   <BrowserRouter>
      <AppRouter/>
   </BrowserRouter>
  );
}

export default App;
