import { Home, Dashboard, Form } from "./pages";
import { Navbar, Sidebar, Footer } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Form />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
