import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductSlider({ products }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {products.map((product) => (
        <div key={product.id} className="p-2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded"
          />
        </div>
      ))}
    </Slider>
  );
}
