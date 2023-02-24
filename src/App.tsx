import RandomTest from './RandomTest'
import Menu from './Components/Menu'
import {Route, Routes} from "react-router-dom";
import Error404 from "./Erorr404";
import Home from "./Home";
import Exchange from "./Exchange";



function App() {
  return (
      <>
        <Menu />
        <Routes>
            <Route path={'/'} element={<RandomTest/>}/>
            <Route path={'/home'} element={<Home/>}/>
            <Route path={'/randomgame'} element={<RandomTest/>}/>
            <Route path={'/exchange'} element={<Exchange/>}/>
            <Route path={'*'} element={<Error404/>}/>

        </Routes>
      </>
  );
}

export default App;
