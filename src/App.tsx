import "./App.css";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { Footer } from "./components/Footer/Footer";
import { FormVideo } from "./components/Form/FormVideo/FormVideo";
import { CategoryVideo } from "./components/CategoryVideo/CategoryVideo";
import { Routes, Route } from "react-router-dom";
import { FormCategory } from "./components/Form/FormCategory/FormCategory";
import { TableCategory } from "./Pages/TableCategory/TableCategory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/home"
          element={[
            <Header key={1} />,
            <Banner key={2} />,
            <CategoryVideo key={3} />,
            <Footer key={4} />,
          ]}
        />
        <Route
          path="/formvideo"
          element={[
            <Header key={1} />,
            <FormVideo key={2} />,
            <Footer key={3} />,
          ]}
        />

        <Route
          path="/formcategory"
          element={[
            <Header key={1} />,
            <FormCategory key={2} />,
            <TableCategory key={3} />,
            <Footer key={4} />,
          ]}
        />
      </Routes>
    </>
  );
}

export default App;
