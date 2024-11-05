import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../../App.css";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

export default function Players({ coins, setCoins }) {
  const [playersTab, setPlayersTab] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [availablePlayers, setAvailablePlayers] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAvailablePlayers(data));
  }, []);
  const handleChoosePlayer = (player) => {
    if (selectedPlayers.length == 6) {
      toast.error("No room for new player");
    } else if (player.player_price > coins) {
      toast.error("Not enough coin!");
    } else {
      const newCoins = coins - player.player_price;
      setCoins(newCoins);
      setSelectedPlayers((prevSelectedPlayers) => [
        ...prevSelectedPlayers,
        player,
      ]);
      toast.success("New Player Added Successfully!!");
    }
    // console.log(player);
    // console.log(selectedPlayers);
  };

  const handleDeselectPlayer = (player) => {
    setSelectedPlayers(selectedPlayers.filter((sp) => sp.id !== player.id));
  };
  return (
    <div>
      <nav className="flex justify-between items-center mt-16 mb-8">
        <h1 className="text-lg md:text-3xl font-bold">
          {playersTab === "available"
            ? "Available Players"
            : `Selected Players ${selectedPlayers.length} / ${6}`}
        </h1>
        <ul className="flex flex-col md:flex-row gap-4 items-center text-sm md:text-lg">
          <li className="mb-5 md:mb-0">
            <a
              onClick={(e) => {
                e.preventDefault();
                setPlayersTab("available");
              }}
              className={`${
                playersTab === "available" ? "bg-lime-400" : "bg-gray-50"
              } px-5 py-3 font-bold border rounded-xl tracking-wider`}
              href="#"
            >
              Available
            </a>
          </li>
          <li>
            <a
              onClick={(e) => {
                e.preventDefault();
                setPlayersTab("selected");
              }}
              className={`${
                playersTab === "selected" ? "bg-lime-400" : "bg-gray-50"
              } px-5 py-3 font-bold border rounded-xl tracking-wider`}
              href="#"
            >
              Selected {selectedPlayers.length}
            </a>
          </li>
        </ul>
      </nav>
      {playersTab === "available" ? (
        <AvailablePlayers
          handleChoosePlayer={handleChoosePlayer}
          players={availablePlayers}
          selectedPlayers={selectedPlayers}
        />
      ) : (
        <SelectedPlayers
          players={selectedPlayers}
          handleDeselectPlayer={handleDeselectPlayer}
          setPlayersTab={setPlayersTab}
        />
      )}
    </div>
  );
}
