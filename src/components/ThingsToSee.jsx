export default function ThingsToSee() {
  const sights = [
    {
      name: "Lublin Castle",
      description: "If you ever visit Lublin and see a big white castle on the hill, don’t worry you’re not in a Disney movie. That’s Lublin Castle, a place that has been everything from a royal residence to a prison, and now a museum",
      image: "/thingsToSee/castle.webp",
      url: "https://zamek-lublin.pl/",
    },
    {
      name: "Old Town",
      description: "Welcome to Lublin’s Old Town where every street looks like it was designed for postcards, not traffic. Once bustling with merchants and nobles, today it’s full of cafés and tourists pretending they’re in a medieval Instagram filter.",
      video: "/thingsToSee/oldTown.mp4",
      url: "https://pl.wikipedia.org/wiki/Stare_Miasto_(Lublin)",
    },
    {
      name: "Nad Zalewem",
      description: "Welcome to Nad Zalewem Lublin’s beach without an sea. Locals come here to swim, sunbathe, and grill enough sausage to qualify as a sport.",
      video: "/thingsToSee/zalew.mp4",
      url: "https://share.google/Jk1QoHggoePFlIyM1",
    },
    {
      name: "Ogród Botaniczny UMCS",
      description: "Welcome to the UMCS Botanical Garden—where plants from around the world show off while locals pretend they suddenly know Latin. It’s the perfect spot to relax, take a walk, or secretly judge which flower would win in a beauty contest",
      image: "thingsToSee/botanicGarden.webp",
      url: "https://www.umcs.pl/pl/zwiedzanie-ogrodu-botanicznego,4795.htm",
    },
  ];

  return (
    <section id="sights" className="py-24 bg-[#34322B]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-[#fffde9]">
          Things to See
        </h2>
  
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-thin scrollbar-thumb-[#bf2f1f] scrollbar-track-transparent">
          {sights.map((sight, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-[300px] flex-shrink-0 snap-center group bg-[#242424] rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative">
                {sight.video ? (
                  <video
                    src={sight.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-56 object-cover rounded-t-3xl group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <img
                    src={sight.image}
                    alt={sight.name}
                    className="w-full h-56 object-cover rounded-t-3xl group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/10 transition-all duration-500"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-[#fffde9]">{sight.name}</h3>
                <p className="mt-3 text-[#f8f1f6] leading-relaxed">{sight.description}</p>
                <a
                  href={sight.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block px-6 py-2 rounded-full bg-[#bf2f1f] hover:bg-[#4a4845] text-[#f8f1f6] font-bold shadow-md transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
}

