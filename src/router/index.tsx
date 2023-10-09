import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Character } from "../components/characters";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Batman",
    element: (
      <Character
        name="Batman"
        description="Batman é um super-herói em Gotham City"
        image="https://nishiweb.com.br/animecomics/images/upload/112.jpg"
      />
    ),
  },{
    path: "/coringa",
    element: (
        <Character
        name="Coringa"
        description="Coringa é um vilão em Gotham City"
        image="./src\img\Branco_1027410.png"
      />
    )
  }
]);
