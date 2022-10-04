import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";
import {
  Close,
  OpenMenu,
  Search,
  Home,
  AllGames,
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
import useStorage from "../hooks/use-storage";
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
    icon: <AllGames className="flex-shrink-0 w-6 h-6" />,
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

export default function NavbarDesktop({ ...restProps }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const { getItem, setItem } = useStorage();

  const [isNavbarOpened, setIsNavbarOpened] = useState(true);

  const toggleNavbar = () => {
    setItem("navbar-opened", !isNavbarOpened);
    setIsNavbarOpened((val) => !val);
  };
  const closeNavbar = () => {
    setItem("navbar-opened", false);
    setIsNavbarOpened(false);
  };

  useEffect(() => {
    setIsNavbarOpened(
      getItem("navbar-opened") ? JSON.parse(getItem("navbar-opened")) : true
    ),
      setMounted(true);
  }, [(isNavbarOpened, getItem)]);

  if (!mounted) return null;

  return (
    <>
      <div
        className={`fixed h-full xl:h-auto xl:relative 3xl:fixed top-0 left-0 z-50 px-[20px] py-[30px] bg-dark-400 rounded-br-2xl flex-shrink-0 hidden md:block self-stretch 3xl:self-start ${
          isNavbarOpened ? "md:w-[285px]" : "md:w-[84px]"
        }`}
        {...restProps}
      >
        <div className="flex items-center gap-5 mb-14">
          <button
            type="button"
            onClick={toggleNavbar}
            className="cursor-pointer"
          >
            {isNavbarOpened ? (
              <Close className="w-6 h-6" />
            ) : (
              <OpenMenu className="w-6 h-6" />
            )}
          </button>

          {isNavbarOpened && <Logo className="w-[178px]" />}
        </div>

        <SimpleBar style={{ maxHeight: "calc(100vh - 110px)", width: "100%" }}>
          <div className="space-y-4">
            {isNavbarOpened && (
              <form className="relative">
                <Search className="w-5 h-5 absolute left-2 top-1/2 -translate-y-1/2 text-dark-300" />
                <input
                  placeholder="Search.."
                  className="h-10 w-full bg-transparent rounded border border-green-500 py-2 pr-3 pl-10 ring-0 focus:ring-0 focus:border-green-300 focus:outline-none placeholder:text-sm placeholder:tracking-[1px] tracking-[1px] placeholder:text-dark-300 text-white font-sans"
                />
              </form>
            )}

            <nav className="flex flex-col gap-1">
              {navArray.map((item, index) => {
                return (
                  <Link href={item.path} key={index}>
                    <a
                      className={`${
                        router.pathname === item.path
                          ? "text-green-500 bg-dark-700"
                          : "text-white"
                      } hover:text-green-500 py-2 px-[12px] rounded text-base flex items-center gap-[12px] transition ${
                        !isNavbarOpened ? "justify-center" : "justify-start"
                      }`}
                    >
                      {item.icon}
                      <span
                        className={`${isNavbarOpened ? "block" : "hidden"}`}
                      >
                        {item.title}
                      </span>
                    </a>
                  </Link>
                );
              })}
            </nav>

            <div className="h-[1px] w-full bg-[#213137]"></div>

            <nav
              className={`${
                isNavbarOpened ? "flex" : "hidden"
              } flex-col gap-1 [&>*]:py-[10px] [&>*]:pl-12 [&>*]:pr-4 [&>*]:transition`}
            >
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

            {isNavbarOpened && (
              <div className="h-[1px] w-full bg-[#213137]"></div>
            )}

            <nav
              className={`flex flex-col gap-1 [&>*]:py-2 [&>*]:px-[12px] [&>*]:rounded [&>*]:text-base [&>*]:flex [&>*]:items-center [&>*]:gap-[12px] [&>*]:transition ${
                !isNavbarOpened ? "[&>*]:justify-center" : "[&>*]:justify-start"
              }`}
            >
              <Link href="/support">
                <a
                  className={`${
                    router.pathname === "/support"
                      ? "text-green-500 bg-dark-700"
                      : "text-white"
                  } hover:text-green-500`}
                >
                  <Support className="flex-shrink-0 w-6 h-6" />
                  <span className={`${isNavbarOpened ? "block" : "hidden"}`}>
                    Support
                  </span>
                </a>
              </Link>
            </nav>
          </div>
        </SimpleBar>
      </div>

      <div
        className={`fixed w-full h-full left-0 top-0 z-30 bg-dark-500/70 hidden xl:hidden cursor-pointer ${
          isNavbarOpened ? "md:block" : ""
        }`}
        onClick={closeNavbar}
      ></div>
    </>
  );
}
