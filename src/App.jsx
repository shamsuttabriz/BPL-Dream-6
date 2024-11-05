import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Players from "./components/Players/Players";

function App() {
  const [coins, setCoins] = useState(0);
  const handleCollectCoin = () => {
    const newCoins = coins + 600000;
    setCoins(newCoins);
  };

  return (
    <>
      <div className="container mx-auto font-sora px-3 md:px-0">
        <Navbar coins={coins}></Navbar>
        <Hero handleCollectCoin={handleCollectCoin}></Hero>
        <Players coins={coins} setCoins={setCoins}></Players>
      </div>
      <Footer></Footer>
      <ToastContainer position="top-left" autoClose={2500} />
    </>
  );
}

export default App;
