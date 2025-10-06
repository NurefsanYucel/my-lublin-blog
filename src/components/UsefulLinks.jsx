export default function UsefulLinks() {
  const links = [
    {
      name: "Lublin Tourism",
      description: "Official tourism site with events, attractions, and city info.",
      url: "https://www.lublin.eu/en/",
    },
    {
      name: "For Transport: Jakdojade",
      description: "While you can use various apps and website to learn about public transport in Lublin I recommend Jakdojade. Especially app version is very useful to check the lines and buying ticket.",
      url: "https://jakdojade.pl/onboarding",
    },
    {
      name: "Lublin Events",
      description: "Find upcoming cultural and music events.",
      url: "https://www.kultura.lublin.eu/en",
    },
    {
      name: "ESN UMCS Lublin",
      description: "This is the official instagram account for the ESN UMCS. Whether you are a Erasmus student or not you can chek it out their account for international meet-ups and events. ",
      url: "https://www.instagram.com/esnumcslublin?igsh=MTk4Mm1hZWI3MzF2OQ==",
    },
    {
      name: "Kosmos: Przestrzeń Młodych",
      description: "🪐Kosmos🪐 is a youth creative space in Lublin. They organize workshops amd other events free of charge. You can find more information on their facebook page.",
      url: "https://www.facebook.com/KosmosPrzestrzenMlodych/",
    },
  ];

  return (
    <section id="links" className="py-24 bg-[#34322B]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-[#fffde9]">
          🔗 Useful Links
        </h2>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-thin scrollbar-thumb-[#bf2f1f] scrollbar-track-transparent">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[300px] max-w-[300px] flex-shrink-0 snap-center group block bg-[#242424] rounded-3xl shadow-lg p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-[#fffde9] mb-2">{link.name}</h3>
              <p className="text-[#f8f1f6] leading-relaxed">{link.description}</p>
              <span className="inline-block mt-4 px-4 py-2 bg-[#bf2f1f] hover:bg-[#4a4845] text-[#f8f1f6] rounded-full font-medium transition">
                Visit
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

