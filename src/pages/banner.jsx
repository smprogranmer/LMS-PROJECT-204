import { FaStar } from "react-icons/fa6";
import avatar from "../assets/2.jpg";
import image from "../assets/1.jpg";

const Banner = () => {
  return (
    <>
      <div className="w-screen h-full px-[5%] pt-5">
        <img
          src={image}
          alt=""
          className="w-full max-h-[80vh] object-cover object-center rounded-md"
        />
        <div className="grid grid-cols-4 gap-5 mt-8">
          <div className="w-full flex items-center justify-center gap-4 border-r border-slate-400/50">
            <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden">
              <img
                src={avatar}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="">
              <h1 className="capitalize text-lg">instructor</h1>

              <span className="font-medium capitalize">Motasim Billah</span>
            </div>
          </div>

          <div className="w-full flex items-center justify-center gap-4 border-r border-slate-400/50">
            <div className="">
              <h1 className="capitalize text-lg">category</h1>

              <span className="font-medium capitalize">Management</span>
            </div>
          </div>
          <div className="w-full flex items-center justify-center gap-4 border-r border-slate-400/50">
            <div className="">
              <h1 className="capitalize text-lg">last update</h1>

              <span className="font-medium capitalize">april 30,2024</span>
            </div>
          </div>
          <div className="w-full flex items-center justify-center ">
            <div className="">
              <h1 className="capitalize text-lg">ratings</h1>

              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-500 text-lg" />
                <FaStar className="text-yellow-500 text-lg" />
                <FaStar className="text-yellow-500 text-lg" />
                <FaStar className="text-yellow-500 text-lg" />
                <FaStar className="text-yellow-500 text-lg" />
                <span className="font-medium">5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
