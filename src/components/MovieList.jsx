import PropTypes from "prop-types";
import { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MovieContext } from "../context/MovieProvider";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MovieList = ({ title, data }) => {
  const { handleTraler } = useContext(MovieContext);

  return (
    <>
      <div className="container m-auto">
        <div className="text-white p-10 mb-10">
          <h2 className="uppercase text-3xl font-bold mb-4">{title}</h2>
          <Carousel
            responsive={responsive}
            className="flex items-center space-x-4"
          >
            {data &&
              data.length > 0 &&
              data.map((item) => (
                <div
                  key={item.id}
                  className="w-[250px] h-[350px] relative group"
                  onClick={() => handleTraler(item.id)}
                >
                  <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out">
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                    <img
                      src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                      alt="img movie"
                      className="w-full h-[350px] object-cover"
                    />
                    <div className="absolute bottom-4 left-4">
                      <p className="uppercase text-md">
                        {(item.title || item.original_title) ?? item.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

MovieList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default MovieList;
