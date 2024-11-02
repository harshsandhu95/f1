import { Titillium_Web } from "next/font/google";

const sans = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export { sans };
