import footerImage from "../../assets/logo-footer.png";
import Newsletter from "../Newsletter/Newsletter";

export default function Footer() {
  return (
    <div className="bg-[#06091A] p-4 md:pb-4 pt-20 md:px-0">
      <div className="container mx-auto text-white py-12 relative">
        <Newsletter></Newsletter>
        <img className="mx-auto mb-16 mt-36" src={footerImage} alt="" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h1 className="text-lg font-semibold tracking-wide mb-4">
              About Us
            </h1>
            <p className="md:w-1/2 text-gray-400 font-medium">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-wide mb-4">
              Quick Links
            </h1>
            <ul className="md:w-1/2 text-gray-400 font-medium list-disc pl-5 leading-7">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-wide mb-4">
              Subscribe
            </h1>
            <p className="md:w-1/2 text-gray-400 font-medium mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div>
              <input
                className="px-8 py-4 rounded-l-2xl text-slate-800 font-semibold focus:outline-none"
                type="email"
                placeholder="Enter your email"
              />
              <button className="px-4 pt-3 pb-4 text-xl font-semibold text-black rounded-e-2xl bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 hover:from-yellow-500 hover:via-pink-600 hover:to-purple-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-b border-slate-800" />
      <p className="text-center text-lg font-medium text-gray-600 py-8">
        @2024 Your Company All Rights Reserved.
      </p>
    </div>
  );
}
