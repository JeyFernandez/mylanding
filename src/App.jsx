import { useEffect } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Btn from "./components/Btn";
import Cards from "./components/Cards";
import Info from "./components/Informations";
import Footer from "./components/Footer";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Banner / Header Background */}
      <div className="h-48 w-full bg-gradient-to-r from-cyan-900 via-slate-900 to-emerald-900 opacity-80 border-b border-slate-800" />

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-16">
        {/* Profile Header */}
        <section className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <img
              data-aos="zoom-in"
              src="/jey.jpg"
              alt="Jasson Fernández"
              className="w-36 h-36 rounded-2xl object-cover ring-4 ring-cyan-500/30 shadow-2xl shadow-cyan-500/10 bg-slate-900"
            />
            <div className="space-y-1">
              <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
                Systems Engineer & Full-Stack Developer
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                JASSON ARIEL FERNÁNDEZ ESPINOZA
              </h1>
              <p className="text-sm text-slate-400 flex items-center justify-center sm:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Disponible para nuevos proyectos
              </p>
            </div>
          </div>

          {/* Social / Contact Buttons */}
          <div className="w-full md:w-auto">
            <Btn />
          </div>
        </section>

        {/* Bio & Information Section */}
        <section className="py-10">
          <Info />
        </section>

        {/* Stack & Github Repos Section */}
        <section className="py-6 space-y-12">
          <Cards />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;