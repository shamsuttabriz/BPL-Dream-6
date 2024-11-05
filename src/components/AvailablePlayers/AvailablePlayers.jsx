import Player from "../Player/Player";

export default function AvailablePlayers({
  handleChoosePlayer,
  players,
  selectedPlayers,
  notify,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-48">
      {players.map((player) => (
        <Player
          key={player.id}
          player={player}
          handleChoosePlayer={handleChoosePlayer}
          selectedPlayers={selectedPlayers}
          notify={notify}
        ></Player>
      ))}
    </div>
  );
}
