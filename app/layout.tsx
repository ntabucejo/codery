import Navbar from "@core/components/sections/navbar";
import "@core/styles/globals.css";
import { Inter } from "@next/font/google";
import Providers from "./providers";

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
      <body
        className={`${inter.className} bg-primary-light text-primary-dark [&>*]:py-4`}>
        <Providers>
          <header className="border-b">
            {/* @ts-expect-error Server Component */}
            <Navbar />
          </header>
          <main className="space-y-4">{children}</main>
          <footer className="border-t">Footer</footer>
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
