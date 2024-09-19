import localFont from "next/font/local";
import "./globals.css";


export const metadata = {
  title: "Traffic Light Example",
  description: "A simple traffic light signal example in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
