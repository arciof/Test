import "@/app/globals.css";
import { PropsWithChildren } from "react";
import { Roboto } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} flex flex-col min-h-[100vh]`}>
        <Header />
        <div className="max-w-[1280px] w-full mx-auto my-[24px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
