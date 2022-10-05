import Link from "next/link";
import {
  MenuClose,
  Search,
  Home,
  Games,
  TopPicks,
  Slot,
  BlackJack,
  TableGames,
  JackpotGames,
  LiveCasino,
  PokerGames,
  Support,
} from "../lib/icons";
import { useRouter } from "next/router";
import SimpleBar from "simplebar-react";
import Header from "./header";
import useLockBodyScroll from "../hooks/use-lock-body-scroll";
import "simplebar-react/dist/simplebar.min.css";

const navArray = [
  {
    path: "/",
    title: "Home",
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

const secondNavArray = [
  {
    path: "/promotions",
    title: "Promotions",
  },
  {
    path: "/help",
    title: "Help",
  },
  {
    path: "/vip",
    title: "VIP",
  },
];

export default function NavbarMobile({ closeMenu, ...restProps }) {
  const router = useRouter();
  useLockBodyScroll();

  return (
    <>
      <div
        className="fixed left-0 top-0 h-full bg-dark-400 w-full z-50 md:hidden"
        {...restProps}
      >
        <Header />

        <div className="px-4 py-[14px] flex items-center gap-16 bg-dark-600 mb-2">
          <form className="relative grow">
            <Search className="w-5 h-5 absolute left-2 top-1/2 -translate-y-1/2 text-dark-300" />
            <input
              placeholder="Search.."
              className="h-10 w-full bg-transparent rounded border border-green-500 py-2 pr-3 pl-10 ring-0 focus:ring-0 focus:border-green-300 focus:outline-none placeholder:text-sm placeholder:tracking-[1px] tracking-[1px] placeholder:text-dark-300 text-white font-sans"
            />
          </form>

          <button
            type="button"
            className="flex-shrink-0 text-white"
            onClick={closeMenu}
          >
            <MenuClose className="w-6 h-6" />
          </button>
        </div>

        <SimpleBar style={{ maxHeight: "calc(100vh - 160px)", width: "100%" }}>
          <div className="space-y-4 overflow-auto pb-[60px]">
            <nav className="flex flex-col gap-1">
              {navArray.map((item, index) => {
                return (
                  <Link href={item.path} key={index}>
                    <a
                      className={`${
                        router.pathname === item.path
                          ? "text-green-500 bg-dark-700"
                          : "text-white"
                      } hover:text-green-500 py-2 px-[12px] rounded text-base flex items-center gap-[12px] transition`}
                    >
                      {item.icon}
                      {item.title}
                    </a>
                  </Link>
                );
              })}
            </nav>

            <div className="h-[1px] w-full bg-[#213137]"></div>

            <nav className="flex flex-col gap-1 [&>*]:py-[10px] [&>*]:pl-12 [&>*]:pr-4 [&>*]:transition">
              {secondNavArray.map((item, index) => {
                return (
                  <Link href={item.path} key={index}>
                    <a>{item.title}</a>
                  </Link>
                );
              })}
              <Link href="/buy-crypto">
                <a className="font-heading !text-green-500">Buy crypto</a>
              </Link>
            </nav>

            <div className="h-[1px] w-full bg-[#213137]"></div>

            <nav className="flex flex-col gap-1 [&>*]:py-2 [&>*]:px-[12px] [&>*]:rounded [&>*]:text-base [&>*]:flex [&>*]:items-center [&>*]:gap-[12px] [&>*]:transition">
              <Link href="/support">
                <a
                  className={`${
                    router.pathname === "/support"
                      ? "text-green-500 bg-dark-700"
                      : "text-white"
                  } hover:text-green-500`}
                >
                  <Support className="flex-shrink-0 w-6 h-6" />
                  Support
                </a>
              </Link>
            </nav>
          </div>
        </SimpleBar>
      </div>
    </>
  );
}
