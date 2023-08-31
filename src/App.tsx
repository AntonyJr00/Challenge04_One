import "./App.css";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { Footer } from "./components/Footer/Footer";
import { CategoryVideo } from "./components/CategoryVideo/CategoryVideo";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <CategoryVideo />
      <Footer />
    </>
  );
}

export default App;
