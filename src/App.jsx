import "./App.css";
import Carrusel from "./components/Carrusel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import News from "./components/News";
import Layout from "./pages/layout";

function App() {
  return (
    <>
      <Header />
      <News />
      <Carrusel />
      <Footer />
    </>
  );
}

export default App;
