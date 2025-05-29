import ProductCard from "../components/ProductCard";
import ProductSlider from "../components/Slider";

const products = [
  {
    id: "1",
    name: "Ürün 1",
    category: "Kategori A",
    price: 120,
    image: "/images/prod1.jpg",
  },
  {
    id: "2",
    name: "Ürün 2",
    category: "Kategori B",
    price: 200,
    image: "/images/prod2.jpg",
  },
  {
    id: "3",
    name: "Ürün 3",
    category: "Kategori C",
    price: 340,
    image: "/images/prod3.jpg",
  },
];

export default function HomePage() {
  return (
    <div>
      <ProductSlider products={products} />

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
