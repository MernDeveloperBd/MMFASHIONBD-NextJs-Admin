
import Sidebar from "@/Components/Sidebar/Sidebar";
import "./globals.css";
import Header from "@/Components/Header/Header";
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
          <div className="main flex">
            <div className="sidebarWrapper w-[18%] h-screen ">
              <Sidebar />
            </div>
            <div className="rightContent w-[82%]">
              <Header />
              <div className="p-3">
                {children}
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
