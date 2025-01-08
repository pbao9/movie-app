import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import ImgTemp from "../assets/temp-1.jpeg";
import ImgPlay from "../assets/play-button.png";

const Banner = () => {
  return (
    <div className="w-full h-[700px] bg-banner bg-center bg-no-repeat bg-cover relative">
      <div className="absolute w-full h-full bg-black opacity-30" />
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20 container m-auto">
        <div className="flex flex-col space-y-5 items-baseline w-[50%]">
          <p className="text-white bg-gradient-to-r from-red-600 to-red-300 py-1 px-3 text-md">
            TV Show
          </p>

          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-3xl">Nghe nói em thích tôi</h2>
            <div className="flex items-center space-x-3">
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
            </div>
          </div>
          <p className="text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for lorem ipsum will uncover many web sites
            still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <div className="flex items-center space-x-4">
            <button className="p-3 text-white bg-black font-bold text-sm">
              Chi tiết
            </button>
            <button className="p-3 text-white bg-red-600 font-bold text-sm">
              Xem phim
            </button>
          </div>
        </div>
        <div className="w-[50%] flex flex-col items-center rounded-3xl">
          <div className="w-[300px] h-[400px] relative group cursor-pointer rounded-3xl">
            <img
              src={ImgTemp}
              alt="temp"
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="w-full h-full absolute rounded-3xl top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img
                src={ImgPlay}
                alt="play"
                className="w-16 h-16 relative z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
