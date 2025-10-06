export default function Cafes() {
  const cafes = [
    {
      name: "Mrau Cafe (aka Cat Cafe)",
      description:
        "Sip, snack, and pet a kitten or several. Dessert changes daily, so your sweet tooth never gets bored",
      image: "/cafeImage/mrau.png",
      url: "https://www.facebook.com/mraucafe",
    },
    {
      name: "Anabilis",
      description:
        "Budget-friendly, near old-town, and yes… the fig ice cream is worth the detour.",
      image: "/cafeImage/anabilis.png",
      url: "https://anabilis.com",
    },
    {
      name: "Pelier Bistro",
      description:
        "Warm atmosphere, warmer dessert, lava cake is a must when it’s cold.",
      image: "/cafeImage/pelier.png",
      url: "https://pelier.pl/",
    },
    {
      name: "Cafe Mari",
      description:
        "Cozy spot near Lublin Plaza, and my go-to is the strawberry matcha—sweet, green, and slightly addictive.",
      image: "/cafeImage/cafeMari.png",
      url: "https://cafemari.pl",
    },
    {
      name: "Kawiarnia Nie wylej",
      description:
        "Good prices, good vibes, and Wi-Fi strong enough to justify your coffee habit.",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipMKMBG5alh1ESzEqHVDxQsHp0rw5lbFV1BgZExf=s1360-w1360-h1020-rw",
      url: "https://niewylej.pl/",
    },
  ];

  return (
    <section id="cafes" className="py-10 bg-[#34322B]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-[#fffde9]">
          Sip, Snack, Smile 
        </h2>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-thin scrollbar-thumb-rose/70 scrollbar-track-stone/20">
          {cafes.map((cafe, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-[300px] flex-shrink-0 snap-center group 
              bg-[#242424] rounded-3xl shadow-lg overflow-hidden 
              transition-transform duration-300 hover:-translate-y-2 hover:shadow-rose/40"
            >
              <div className="relative">
                <img
                  src={cafe.image}
                  alt={cafe.name}
                  className="w-full h-64 object-cover rounded-t-3xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/50 to-transparent group-hover:from-midnight/20 transition-all duration-500"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-[#fffef4]">
                  {cafe.name}
                </h3>
                <p className="mt-3 text-[#fffde9] leading-relaxed">
                  {cafe.description}
                </p>
                <a
                  href={cafe.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block px-6 py-2 rounded-full 
                  bg-[#bf2f1f] hover:bg-[#4a4845] text-midnight font-bold 
                  shadow-md transition"
                >
                  Visit
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
