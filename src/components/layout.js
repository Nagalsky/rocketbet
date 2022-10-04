import Header from "./header";
import Footer from "./footer";
import NavbarDesktop from "./navbar-desktop";
import MobileMenu from "./mobile-menu";

export default function Layout({ children, ...restProps }) {
  return (
    <div className="min-h-screen flex" {...restProps}>
      <div className="flex md:pl-[84px] xl:pl-0 grow">
        <NavbarDesktop />

        <div className="grow flex flex-col">
          <Header />

          <main className="flex-grow">{children}</main>

          <Footer />

          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
