import type { Metadata } from "next";
import "./globals.css";
import CircleCursor from "./(components)/CircleCursor";
import { raleway } from "./(utilities)/fonts";
import { CursorContextProvider } from "./(components)/CursorContextProvider";
import Footer from "./(components)/Footer";

export const metadata: Metadata = {
  title: "ItsMushfik",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CursorContextProvider>
        <body className={` shadow-sm text-white font-sans ${raleway.variable}`}>
          <main className="max-w-screen-xl px-2 mx-auto flex-wrap">
            <CircleCursor />
            {children}
          </main>
          <Footer />
        </body>
      </CursorContextProvider>
    </html>
  );
}
