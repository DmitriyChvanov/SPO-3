import { BrowserRouter } from "react-router-dom";
import "./reset.css"
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from ".";

const App = observer(() => {
  const {user} = useContext(Context)

  // console.log(user.name)

  return (
   <BrowserRouter>
      <AppRouter/>
   </BrowserRouter>
  );
})

export default App;
