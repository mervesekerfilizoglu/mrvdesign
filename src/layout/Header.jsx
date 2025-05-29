import { FaPhoneAlt, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="w-full">
        {/* Üst Bilgi Çubuğu */}
        <div className="bg-[#2C2E3E] text-white text-sm px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <FaPhoneAlt className="text-xs" />
              <span>(225) 555-0118</span>
            </div>
            <div className="flex items-center gap-1">
              <FiMail className="text-xs" />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>Follow Us and get a chance to win 80% off</span>
            <div className="flex gap-2">
              <span>Follow Us :</span>
              <FaInstagram className="hover:text-blue-400 cursor-pointer" />
              <FaYoutube className="hover:text-red-500 cursor-pointer" />
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Ana Navigasyon */}
        <div className="bg-white shadow-sm px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">Bandage</div>

          {/* Menü */}
          <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-600">Home</a>
            <div className="relative group">
              <button className="hover:text-blue-600">Shop</button>
            </div>
            <a href="#" className="hover:text-blue-600">About</a>
            <a href="#" className="hover:text-blue-600">Blog</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
            <a href="#" className="hover:text-blue-600">Pages</a>
          </nav>

          {/* Sağ ikonlar */}
          <div className="flex items-center gap-4 text-gray-700">
            <a href="#" className="flex items-center gap-1 hover:text-blue-600">
              <AiOutlineUser />
              <span className="text-sm">Login / Register</span>
            </a>
            <FaSearch className="cursor-pointer hover:text-blue-600" />
            <div className="relative">
              <FaShoppingCart className="cursor-pointer hover:text-blue-600" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1 rounded-full">1</span>
            </div>
            <div className="relative">
              <FaHeart className="cursor-pointer hover:text-blue-600" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1 rounded-full">1</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Bölümü */}
      <div className="relative h-[500px] w-full bg-gray-100">
        {/* Arka plan resmi - görseldeki gibi konumlandırıldı */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat bg-center"
          style={{ 
            backgroundImage: `url(/model.svg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%'
          }}
        ></div>
        
  
        
        {/* İçerik - görseldeki gibi hizalandı */}
        <div className="relative h-full flex flex-col justify-center pl-16 text-white max-w-2xl">
          <h2 className="text-xl font-bold mb-2  text-white">SUMMER 2020</h2>
          <h1 className="text-5xl font-extrabold mb-4">NEW COLLECTION</h1>
          <p className="text-lg mb-6 max-w-md">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="bg-[#2DC071] text-white px-10 py-3 rounded-md w-fit font-bold hover:bg-[#2DC071]  transition-colors">
            SHOP NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;