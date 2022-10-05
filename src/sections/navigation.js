import Link from "next/link";
import {
  Home,
  Games,
  TopPicks,
  Slot,
  BlackJack,
  TableGames,
  JackpotGames,
  LiveCasino,
  PokerGames,
} from "../lib/icons";
import { useRouter } from "next/router";

const navArray = [
  {
    path: "/",
    icon: <Home className="flex-shrink-0 w-6 h-6" />,
  },
  {
    path: "/all-games",
    title: "All games",
    icon: <Games className="flex-shrink-0 w-6 h-6" />,
  },
  {
    path: "/top-picks",
    title: "Top picks",
    icon: <TopPicks className="flex-shrink-0 w-6 h-6" />,
  },
  {
    path: "/slots",
    title: "Slot page",
    icon: <Slot className="flex-shrink-0 w-6 h-6" />,
  },
  {
    path: "/black-jack",
    title: "Black jack",
    icon: <BlackJack className="flex-shrink-0 w-6 h-6" />,
  },
  {
    path: "/table-games",
    title: "Table games",
    icon: <TableGames className="flex-shrink-0 w-6 h-6" />,
  },
  {
    path: "/jackpot-games",
    title: "Jackpot games",
    icon: <JackpotGames className="flex-shrink-0 w-6 h-6" />,
  },
  {
    path: "/live-casino",
    title: "Live casino",
    icon: <LiveCasino className="flex-shrink-0 w-6 h-6" />,
  },
  {
    path: "/poker-games",
    title: "Poker games",
    icon: <PokerGames className="flex-shrink-0 w-6 h-6" />,
  },
];

export default function Navigation({ ...restProps }) {
  const router = useRouter();

  return (
    <nav
      className="flex flex-nowrap gap-3 p-2 rounded bg-dark-400 overflow-y-auto scrollbar-thin scrollbar-thumb-transparent md:scrollbar-thumb-green-500 scrollbar-track-transparent md:scrollbar-track-dark-300"
      {...restProps}
    >
      {navArray.map((item, index) => {
        return (
          <Link href={item.path} key={index}>
            <a
              className={`${
                router.pathname === item.path
                  ? "text-green-500 bg-dark-700"
                  : "text-white"
              } hover:text-green-500 p-2 px-sm rounded text-base flex items-center gap-2 transition whitespace-nowrap`}
            >
              {item.icon}
              {item.title}
            </a>
          </Link>
        );
      })}
    </nav>
  );
}
