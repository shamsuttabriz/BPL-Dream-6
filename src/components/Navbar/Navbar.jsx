import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../assets/logo.png";

function Navbar({ coins }) {
  return (
    <div className="flex justify-between items-center py-4 text-gray-600">
      <img src={logo} alt="Navbar logo" />
      <ul className="hidden md:flex items-center gap-12">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Fixture</a>
        </li>
        <li>
          <a href="#">Teams</a>
        </li>
        <li>
          <a href="#">Schedules</a>
        </li>
        <li className="px-5 py-4 font-bold border rounded-2xl text-gray-900 tracking-wider">
          {coins} Coins 🪙
        </li>
      </ul>
      <div className="block md:hidden text-3xl text-gray-700">
        <RxHamburgerMenu />
      </div>
    </div>
  );
}
export default Navbar;
