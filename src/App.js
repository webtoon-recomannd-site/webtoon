import Banner from './Component/Banner';
import Portfolioshop from './Component/Portfolioshop';
import {BrowserRouter,Route,Routes} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Banner />
    <Portfolioshop/>
    </BrowserRouter>
  );
}

export default App;
