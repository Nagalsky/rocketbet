import Header from "../sections/header";
import Footer from "../sections/footer";
import Navbar from "../sections/navbar";

export default function Layout({ children, ...restProps }) {
  return (
    <div className="min-h-screen flex flex-col" {...restProps}>
      <Header />

      <Navbar />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
}
