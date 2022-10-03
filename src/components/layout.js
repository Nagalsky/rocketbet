import Header from "../sections/header";
import Footer from "../sections/footer";

export default function Layout({ children, ...restProps }) {
  return (
    <div className="min-h-screen flex flex-col" {...restProps}>
      <Header />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
}
