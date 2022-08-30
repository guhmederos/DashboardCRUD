import Home from "./pages/Home/Home";
import api from "./api";
import { BrowserRouter,
Routes,
Route,
} from "react-router-dom"

function App() {
    return (
        <div className="App">
           <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
               <Route path="/" element={<Home  />}></Route>
            </Routes>
           </BrowserRouter>
        </div>
    );
}

export default App;