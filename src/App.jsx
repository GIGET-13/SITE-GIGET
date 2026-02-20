import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Partners from "./components/sections/Partners";
import Footer from "./components/layout/Footer";
import { LocationProvider } from "./context/LocationContext";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <LocationProvider>
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
    </LocationProvider>
  );
}

export default App;
