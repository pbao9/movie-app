import PropType from "prop-types";
import { useContext } from "react";
import { MovieContext } from "../context/MovieProvider";
const MovieSearch = ({ title, data }) => {
  const { handleTraler } = useContext(MovieContext);
  return (
    <div className="text-white p-10 mb-10">
      <h2 className="uppercase text-3xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data &&
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
      </div>
    </div>
  );
};

MovieSearch.propTypes = {
  title: PropType.string,
  data: PropType.array,
};

export default MovieSearch;
