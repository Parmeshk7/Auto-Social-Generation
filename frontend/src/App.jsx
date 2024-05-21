import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";
import DomainInsights from "./pages/DomainInsights";
import DomainArchive from "./pages/DomainArchive";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insights" element={<DomainInsights />} />
          <Route path="/archive" element={<DomainArchive />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
