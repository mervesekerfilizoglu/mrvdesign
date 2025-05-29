import { useParams } from "react-router-dom";

const allProducts = [
  {
    id: "1",
    name: "Ürün 1",
    category: "Kategori A",
    price: 120,
    image: "/images/prod1.jpg",
    description: "Ürün 1 detay açıklaması",
  },
  {
    id: "2",
    name: "Ürün 2",
    category: "Kategori B",
    price: 200,
    image: "/images/prod2.jpg",
    description: "Ürün 2 detay açıklaması",
  },
  {
    id: "3",
    name: "Ürün 3",
    category: "Kategori C",
    price: 340,
    image: "/images/prod3.jpg",
    description: "Ürün 3 detay açıklaması",
  },
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === id);

  if (!product) return <p className="text-center mt-10">Ürün bulunamadı</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto flex flex-col md:flex-row gap-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-1/2 rounded"
      />
      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-gray-600">{product.category}</p>
        <p className="mt-4">{product.description}</p>
        <p className="mt-6 font-bold text-xl">{product.price} TL</p>
      </div>
    </div>
  );
}
