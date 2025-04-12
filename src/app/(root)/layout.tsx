import Navbar from "@/components/Layouts/Navbar/Navbar";
import Footer from "@/components/Layouts/Footer/Footer";
import { TChildren } from "@/lib/types/types";



const MainLayout = ({ children }: TChildren) => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-284px)]">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
