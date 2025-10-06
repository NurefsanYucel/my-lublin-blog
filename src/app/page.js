"use client";

import Navbar from "@/components/Navbar";
import Cafes from "@/components/Cafes";
import ThingsToSee from "@/components/ThingsToSee";
import UsefulLinks from "@/components/UsefulLinks";
import Footer from "@/components/Footer";
import Activities from "@/components/Activities";

export default function Home() {
  return (
    <div className="bg-[#34322B] text-ivory min-h-screen relative">

      <Navbar />
      <main className="relative text-center py-16 sm:py-24 overflow-hidden">

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center animate-fade-in">
          <h1
            className="relative z-20 text-[10rem] sm:text-[14rem] font-black tracking-tight text-transparent bg-clip-text 
            bg-[url('/cafeImage/header.png')] bg-cover bg-[position:70%_73%] 
            brightness-[0.7] bg-white/50 [background-blend-mode:screen] 
            drop-shadow-[0_0_3px_rgba(255,255,255,0.3)] leading-none"
            style={{
              transform: "scaleY(1.3)",
              WebkitTextStroke: "6px transparent", // makes letters appear bolder
            }}
          >
            LUBLIN <br /> VIBES
          </h1>

          <p
            className="relative z-20 mt-12 max-w-2xl text-lg sm:text-2xl leading-relaxed
            bg-white/5 backdrop-blur-md rounded-2xl p-6 
            font-serif italic text-[#f5d38c] tracking-wide"
          >
            The charm is subtle, but it leaves a mark
          </p>
        </div>
      </main>

      <Cafes />
      <ThingsToSee />
      <Activities />
      <UsefulLinks />
      <Footer />
    </div>
  );
}


