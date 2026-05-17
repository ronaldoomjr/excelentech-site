import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import ScrollToTop from "@/components/landing/ScrollToTop";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
