import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ShopPage from "./pages/ShopPage";
import FluıdPage from "./pages/FluıdPage";
import ProductCard from "./components/ProductCard";
import Blog from "./pages/Blog";
import Carousel from "./pages/Carousel";


import ShopanaPage from "./pages/ShopanaPage";

function App() {
  return (
    <>
      <Header />
     <ShopPage />
     <ProductCard />
     <Carousel />
     <FluıdPage />
     <Blog />
     <Footer />
      <Header />
     <ShopanaPage />
     <Footer />
    </>
  );
}

export default App;
