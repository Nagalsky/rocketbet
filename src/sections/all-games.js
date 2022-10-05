import Link from "next/link";
import { Games } from "../lib/icons";
import GameCard from "../components/game-card";

const allGamesArray = [
  {
    title: "777 Oktoberfest",
    favorite: false,
    image: "/images/games/game-card.png",
    urlPath: "/",
  },
  {
    title: "Aztec Magic",
    favorite: false,
    image: "/images/games/game-card.png",
    urlPath: "/",
  },
  {
    title: "Book of dead",
    favorite: true,
    image: "/images/games/game-card.png",
    urlPath: "/",
  },
  {
    title: "coinfest",
    favorite: false,
    image: "/images/games/game-card.png",
    urlPath: "/",
  },
  {
    title: "Green Machine Supreme",
    favorite: false,
    image: "/images/games/game-card.png",
    urlPath: "/",
  },
  {
    title: "Green Machine Supreme",
    favorite: true,
    image: "/images/games/game-card.png",
    urlPath: "/",
  },
  {
    title: "Green Machine Supreme",
    favorite: false,
    image: "/images/games/game-card.png",
    urlPath: "/",
  },
  {
    title: "Green Machine Supreme",
    favorite: false,
    image: "/images/games/game-card.png",
    urlPath: "/",
  },
  {
    title: "Green Machine Supreme",
    favorite: true,
    image: "/images/games/game-card.png",
    urlPath: "/",
  },
  {
    title: "Green Machine Supreme",
    favorite: false,
    image: "/images/games/game-card.png",
    urlPath: "/",
  },
  {
    title: "Green Machine Supreme",
    favorite: false,
    image: "/images/games/game-card.png",
    urlPath: "/",
  },
  {
    title: "Green Machine Supreme",
    favorite: true,
    image: "/images/games/game-card.png",
    urlPath: "/",
  },
];

export default function AllGames({ ...restProps }) {
  return (
    <section className="py-6" {...restProps}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="flex items-center justify-start gap-2 text-lg md:text-[21px] font-heading">
          <Games className="text-white w-8 h-8 flex-shrink-0" /> All games
        </h2>

        <Link href="/">
          <a className="font-semibold text-white bg-dark-600 hover:bg-gray-700 transition rounded px-[30px] py-[10px]">
            See all
          </a>
        </Link>
      </div>

      <div className="grid grid-cols-[repeat(6,162px)] md:grid-cols-4 gap-4 overflow-y-auto scrollbar-thin scrollbar-thumb-transparent -mr-[15px] md:mr-0 pr-[15px] md:pr-0">
        {allGamesArray.map((game, index) => {
          return (
            <GameCard
              key={index}
              title={game.title}
              image={game.image}
              favorite={game.favorite}
              urlPath={game.urlPath}
            />
          );
        })}
      </div>
    </section>
  );
}
