import "./App.css";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { Footer } from "./components/Footer/Footer";
// import { FormVideo } from "./components/Form/FormVideo/FormVideo";
import { CategoryVideo } from "./components/CategoryVideo/CategoryVideo";
// import { Slider } from "./components/Home/Slider/Slider";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <CategoryVideo />
      {/* <FormVideo /> */}
      {/* <Slider /> */}
      <Footer />
    </>
  );
}

export default App;
