import { Poppins } from "next/font/google";
import "./globals.css";
import Provider from "./providers";

const poppinsLight = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Company Homepage",
  description: "Winsor and Newton Company Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppinsLight.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
