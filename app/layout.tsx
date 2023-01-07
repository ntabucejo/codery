import Navbar from "@core/components/sections/navbar";
import "@core/styles/globals.css";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.className} bg-primary-light text-primary-dark`}>
        <header>
          <Navbar />
        </header>
        <main className="space-y-4">{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
};

export default Layout;
