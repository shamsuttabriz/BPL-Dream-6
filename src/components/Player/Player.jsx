import { FaUser } from "react-icons/fa";
import { IoFlag } from "react-icons/io5";

export default function Player({
  player,
  handleChoosePlayer,
  selectedPlayers,
}) {
  const {
    cover_img,
    batting_style,
    bolling_style,
    player_country,
    player_name,
    player_price,
    player_rating,
    player_type,
  } = player;

  const isSelected = selectedPlayers.indexOf(player) !== -1;

  return (
    <div className="border-2 p-4 rounded-xl">
      <img
        className="rounded-lg w-full object-cover"
        src={cover_img}
        alt="Cover Image"
      />
      <div className="flex items-center gap-2 mt-6 text-xl font-semibold">
        <FaUser />
        <h1>{player_name}</h1>
      </div>
      <div className="flex justify-between items-center my-4">
        <p className="flex gap-2 items-center text-gray-400">
          <IoFlag />
          <span>{player_country}</span>
        </p>
        <p className="bg-gray-100 px-4 py-2 font-medium rounded-lg text-sm">
          {player_type}
        </p>
      </div>
      <hr className="border-b my-4" />
      <div className="text-lg font-semibold flex justify-between items-center text-gray-600">
        <span>Ratting</span> <span>{player_rating}</span>
      </div>
      <div className="flex font-medium justify-between items-center my-4 text-base md:text-lg">
        <span>{batting_style}</span>
        <span className="text-gray-500">{bolling_style}</span>
      </div>
      <div className="flex justify-between items-center text-base md:text-lg font-medium">
        <h1>Price: ${player_price}</h1>
        <button
          onClick={() => handleChoosePlayer(player)}
          disabled={isSelected ? true : false}
          className="border px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 duration-200"
        >
          {isSelected ? "Already Added" : "Choose Player"}
        </button>
      </div>
    </div>
  );
}
