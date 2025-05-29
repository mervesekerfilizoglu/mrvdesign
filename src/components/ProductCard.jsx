import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="border rounded-lg p-4 hover:shadow-lg transition-shadow flex flex-col"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-500">{product.category}</p>
      <p className="mt-auto font-bold text-blue-600">{product.price} TL</p>
    </Link>
  );
}
