import { Route, Routes } from "react-router-dom";
import Header from "./layouts/header";
import Deatils from "./pages/details";
import HomePage from "./pages/home";
import "./app.scss"
import Footer from "./layouts/footer";
import AddCards from "./pages/add-cards";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-courses" element={<AddCards />} />
        <Route path="/:_id" element={<Deatils />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
