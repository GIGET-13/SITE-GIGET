import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Partners from "./components/sections/Partners";
import Footer from "./components/layout/Footer";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="font-sans antialiased text-giget-blue bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {isHome && (
          <>
            <Hero />
            <Partners />
          </>
        )}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
