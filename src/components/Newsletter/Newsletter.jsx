export default function Newsletter() {
  return (
    <div className="container border-2 border-white rounded-2xl p-5 absolute -top-60 md:-top-48">
      <div className="bg-white bg-[url('../../../src/assets/bg-shadow.png')] bg-no-repeat bg-cover bg-center rounded-3xl ">
        <div className="md:w-1/2 mx-auto text-center py-12 space-y-6 p-4">
          <h1 className="text-2xl md:text-4xl font-bold text-slate-900">
            Subscribe to our Newsletter
          </h1>
          <p className="text-base md:text-xl font-medium text-gray-500 ">
            Get the latest updates and news right in your inbox!
          </p>
          <div>
            <input
              className="px-8 py-4 mr-4 md:w-1/2 border rounded-2xl text-slate-800 font-semibold focus:outline-none"
              type="email"
              placeholder="Enter your email"
            />
            <button className="px-4 pt-3 pb-4 mt-4 md:mt-0 w-40 text-xl font-semibold text-black rounded-2xl bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 hover:from-yellow-500 hover:via-pink-600 hover:to-purple-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
