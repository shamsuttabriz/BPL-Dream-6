import { toast } from "react-toastify";
import banner from "../../assets/banner-main.png";

function Hero({ handleCollectCoin }) {
  return (
    <div className="bg-[url('../../../src/assets/bg-shadow.png')] bg-no-repeat bg-cover bg-center bg-black rounded-3xl py-32 md:py-36 flex justify-center items-center">
      <div className="text-center">
        <img className="mx-auto" src={banner} alt="Banner" />
        <h1 className="text-4xl font-bold text-white mt-10 leading-snug">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-2xl font-semibold py-5 text-gray-400">
          Beyond Boundaries Beyond Limits
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleCollectCoin();
            toast.success("Coins Added Successfully!");
          }}
          className="border border-lime-400 px-2 py-5 rounded-2xl mt-3"
        >
          <span className="bg-lime-400 text-black font-bold py-[14px] px-5 rounded-xl">
            Claim Free Credit
          </span>
        </button>
      </div>
    </div>
  );
}
export default Hero;
