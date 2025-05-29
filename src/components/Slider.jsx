import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HeroSlider = () => {
  return (
    <section className="relative bg-cyan-500 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 py-16">
        {/* Yazı Alanı */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <p className="uppercase text-sm tracking-widest">Summer 2020</p>
          <h1 className="text-4xl md:text-5xl font-bold">New Collection</h1>
          <p className="text-base max-w-md">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition">
            Shop Now
          </button>
        </div>

        {/* Model Görseli */}
        <div className="flex-1 mt-8 md:mt-0">
          <img
            src="/model.png"
            alt="model"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>

      {/* Slider Okları */}
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl">
        <FaChevronLeft />
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl">
        <FaChevronRight />
      </button>

      {/* Slider Göstergesi */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        <div className="w-10 h-1 bg-white rounded-full"></div>
        <div className="w-6 h-1 bg-white/60 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSlider;
