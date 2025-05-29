import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <Link to="/" className="text-xl font-bold">
        E-Commerce
      </Link>
      <nav className="flex gap-4">
        <Link to="/" className="hover:text-blue-600">
          Anasayfa
        </Link>
        <Link to="/shop" className="hover:text-blue-600">
          Mağaza
        </Link>
        <Link to="/contact" className="hover:text-blue-600">
          İletişim
        </Link>
      </nav>
      <ShoppingCart size={24} className="text-gray-700" />
    </header>
  );
}
