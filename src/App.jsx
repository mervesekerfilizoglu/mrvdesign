import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ShopPage from "./pages/ShopPage";
import FluıdPage from "./pages/FluıdPage";
import ProductCard from "./components/ProductCard";
import Blog from "./pages/Blog";
function App() {
  return (
    <>
      <Header />
     <ShopPage />
     <ProductCard />
     <FluıdPage />
     <Blog />
     <Footer />
     
    </>
  );
}

export default App;
