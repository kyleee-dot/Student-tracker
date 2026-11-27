
import MainNavigation from "./components/MainNavigation";
import "./globals.css";

export const metadata = {
  title: "BSIT Student Directory",
  description: "Our BSIT student directory website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f5f3f0] text-[#1d1d1b] antialiased">
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}