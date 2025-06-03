import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ShopPage from "./pages/ShopPage";
import FluıdPage from "./pages/FluıdPage";
import ProductCard from "./components/ProductCard";
import Blog from "./pages/Blog";
import Carousel from "./pages/Carousel";
import AboutanaPage from "./pages/AboutanaPage";


import ShopanaPage from "./pages/ShopanaPage";
import ProductDetailanaPage  from "./pages/ProductDetailanaPage";

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



     <Header />
     <ProductDetailanaPage />
     <Footer />



 <AboutanaPage />
     <Footer />
    </>
  );
}

export default App;
