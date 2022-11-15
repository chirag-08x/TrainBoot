import { Home } from "./pages";
import { Navbar, Footer } from "./components";
import "./App.css";

const App = () => {
  return (
    <main>
      <Navbar />
      <Home />
      <Footer />
    </main>
  );
};

export default App;
