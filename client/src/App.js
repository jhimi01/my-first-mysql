import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";


function App() {
  return (
    <div>
      <BrowserRouter>
     <Routes>
     <Route path="/" element={<Books />}></Route>
      <Route path="/add" element={<Add />}></Route>
      <Route path="/update" element={<Update />}></Route>
     </Routes>
      </BrowserRouter>
      {/* <h1>hello</h1> */}
    </div>
  );
}

export default App;
