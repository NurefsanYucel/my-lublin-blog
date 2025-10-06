export default function Activities() {
    const activities = [
        {
            name: "Escape Room Lublin",
            description:
              "Up for a challenge? Try an escape room in Lublin and see if you can beat the clock!",
            image: "/activitiesImg/escapeRoom.jpg",
            url: "https://lublin.letmeout.pl/",
        },
        {
            name: "Kayaking on Bystrzyca River",
            description:
              "Paddle through scenic routes, enjoy some peace, and maybe race your friends.",
            image: "/activitiesImg/river.jpg",
            url: "https://www.kajaki.lublin.pl/",
        },
        {
            name: "Open-Air Cinema Nights",
            description:
              "During the summer, Kino Perła hosts magical open-air cinema events check out their official Facebook page for the latest schedule!",
            image: "/activitiesImg/openCinema.jpg",
            url: "https://www.facebook.com/kinoperla",
        },
        {
            name: "Aqua Lublin",
            description:
              "Cool off at Aqua Lublin the city’s modern water park, perfect for swimming, relaxing, or enjoying the slides on a hot day!",
            image: "/activitiesImg/aquaLublin.jpg",
            url: "https://mosir.lublin.pl/obiekty/aqua-lublin/",
        },
    ];
  
    return (
        <section id="activities" className="py-24 bg-[#34322B]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-5xl font-extrabold text-center mb-16 text-[#fffde9]">
              What to do? 
            </h2>
    
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-thin scrollbar-thumb-rose/70 scrollbar-track-stone/20">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="min-w-[300px] max-w-[300px] flex-shrink-0 snap-center group 
                  bg-[#242424] rounded-3xl shadow-lg overflow-hidden 
                  transition-transform duration-300 hover:-translate-y-2 hover:shadow-rose/40"
                >
                  <div className="relative">
                    <img
                      src={activity.image}
                      alt={activity.name}
                      className="w-full h-64 object-cover rounded-t-3xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/50 to-transparent group-hover:from-midnight/20 transition-all duration-500"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-semibold text-[#fffde9]">
                      {activity.name}
                    </h3>
                    <p className="mt-3 text-ivory leading-relaxed">
                      {activity.description}
                    </p>
                    <a
                      href={activity.url}
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
  