import ProductCard from "../components/ProductCard";

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
  {
    id: "4",
    name: "Ürün 4",
    category: "Kategori D",
    price: 420,
    image: "/images/prod4.jpg",
  },
];

export default function ShopPage() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
