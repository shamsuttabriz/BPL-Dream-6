import { RiDeleteBin5Fill } from "react-icons/ri";
import { toast } from "react-toastify";

export default function SelectedPlayers({
  players,
  handleDeselectPlayer,
  setPlayersTab,
}) {
  // console.log(players);
  return (
    <div className="mb-48">
      <div>
        {players.map((player) => (
          <div
            key={player.id}
            className="flex justify-between border py-2 pl-2 pr-4 rounded-lg mb-3"
          >
            <div className="flex items-center gap-3">
              <img className="w-20 rounded-lg" src={player.cover_img} alt="" />
              <div>
                <p className="text-xl font-bold ">{player.player_name}</p>
                <p className="text-base font-medium text-gray-400">
                  {player.player_type}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                handleDeselectPlayer(player);
                toast.success("Player Remove Successfully!");
              }}
              className="text-2xl text-red-700"
            >
              <RiDeleteBin5Fill />
            </button>
          </div>
        ))}

        <a
          onClick={(e) => {
            e.preventDefault();
            setPlayersTab("available");
          }}
          href="#"
          className="block p-2 border-2 mt-6 rounded-lg md:w-1/6 text-center"
        >
          <span className="block px-4 py-2 rounded-md bg-lime-400 text-black font-bold">
            Add More Player
          </span>
        </a>
      </div>
    </div>
  );
}
