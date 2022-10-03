import { useState } from "react";
import Logo from "../components/logo";
import { Key } from "../lib/icons";

export default function Header({ ...restProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <header className="py-4 md:py-6 bg-dark-400" {...restProps}>
      <div className="container flex items-center justify-between gap-2">
        <Logo className="w-[128px] md:hidden" />

        {!isLoggedIn ? (
          <div className="ml-auto flex items-center md:gap-4">
            <div className="flex gap-2 md:gap-4">
              <button
                type="button"
                className="font-semibold text-white rounded bg-dark-600 py-[6.5px] px-[14px] md:py-[10px] md:px-[33px] transition hover:bg-green-500 text-[13px] md:text-sm"
              >
                Sign In
              </button>

              <button
                type="button"
                className="font-semibold text-white rounded bg-gradient-to-r from-[#3dc68d] to-[#278b62] hover:from-[#278b62] hover:to-[#3dc68d] py-[6.5px] md:py-[10px] px-3 md:px-4 transition inline-flex items-center justify-center gap-2 shadow-[0_3px_13px_0_#3cc38b] text-[13px] md:text-sm"
              >
                <Key className="w-4 hidden md:block" />
                Sign up
              </button>
            </div>
          </div>
        ) : (
          <div className="ml-auto flex items-center md:gap-4">logged in</div>
        )}
      </div>
    </header>
  );
}
