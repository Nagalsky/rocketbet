import { useState, useRef } from "react";
import { Search, MenuBurger, Wallet, Casino, Chat } from "../lib/icons";
import NavbarMobile from "./navbar-mobile";
import { lock, unlock } from "tua-body-scroll-lock";

export default function MobileMenu({ ...restProps }) {
  const scrollLockRef = useRef(null);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const openMenu = () => {
    setIsOpenMenu(true);
    lock(scrollLockRef);
  };
  const closeMenu = () => {
    setIsOpenMenu(false);
    unlock(scrollLockRef);
  };

  return (
    <>
      {isOpenMenu && <NavbarMobile closeMenu={closeMenu} />}

      <div
        className="sticky left-0 bottom-0 z-30 px-4 py-[10px] bg-dark-400 grid grid-cols-5 gap-8 md:hidden"
        {...restProps}
      >
        <button
          type="button"
          className="flex flex-col items-center justify-center text-center gap-2"
          onClick={openMenu}
        >
          <MenuBurger className="w-5 h-5" />
          Menu
        </button>
        <button
          type="button"
          className="flex flex-col items-center justify-center text-center gap-2"
        >
          <Search className="w-5 h-5" />
          Search
        </button>
        <button
          type="button"
          className="flex flex-col items-center justify-center text-center gap-2"
        >
          <Wallet className="w-5 h-5" />
          Wallet
        </button>
        <button
          type="button"
          className="flex flex-col items-center justify-center text-center gap-2"
        >
          <Casino className="w-5 h-5" />
          Casino
        </button>
        <button
          type="button"
          className="flex flex-col items-center justify-center text-center gap-2"
        >
          <Chat className="w-5 h-5" />
          Chat
        </button>
      </div>
    </>
  );
}
