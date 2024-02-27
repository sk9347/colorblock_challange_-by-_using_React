import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "../GameComponent/RegisterPage/register";
import PreGame from "../GameComponent/PreGame";

import RedAndGreen from "../GameComponent/GameComponent";
import RedAndGreenmid from "../GameComponent/midLevel";
import RedAndGreenhard from "../GameComponent/hardLevel";

const NavStack = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/pregame" element={<PreGame></PreGame>}></Route>
        <Route path="/game" element={<RedAndGreen></RedAndGreen>}></Route>
        <Route
          path="/midLevel"
          element={<RedAndGreenmid></RedAndGreenmid>}
        ></Route>
        <Route
          path="/hardLevel"
          element={<RedAndGreenhard></RedAndGreenhard>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default NavStack;
