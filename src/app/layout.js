

import "./globals.css";
import ThemeProvider from "@/Components/Context/ThemeContext";

export const metadata = {
  title: "Dashboard - MM Fashion World || Trendy Fashion and top classes dresses in top ecommerce platform",
  description: "MM Fashion World — Shop trendy sarees, panjabis & three pieces online in BD. Best prices, COD, free delivery. Your style, your rules!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
