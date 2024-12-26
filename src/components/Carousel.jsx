import { useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import { demo_blog_img } from "../assets";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const MyCarousel = ({ data }) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((dt, i) => (
        <Carousel.Item
          onClick={() => navigate("/news/" + dt.id)}
          key={dt.imgTitle}
          style={{ height: "250px" }}
        >
          <CarouselImage text={dt.imgTitle} />
          <Carousel.Caption>
            <h3>{dt.title}</h3>
            <p>{dt.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

const CarouselImage = ({ img, text }) => {
  return <Image className="rounded" src={img || demo_blog_img} text={text} />;
};

MyCarousel.propTypes = {
  data: PropTypes.array,
};

CarouselImage.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default MyCarousel;
