export default function Navbar() {
    return (
      <nav className="sticky top-0 z-50 bg-[#86765B] backdrop-blur-md shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#bf2f1f]">My Lublin Blog</h1>
          <ul className="flex gap-6">
            <li>
              <a href="#cafes" className="hover:text-[#bf2f1f] text-[#fffde9] transition">
                Cafes
              </a>
            </li>
            <li>
              <a href="#sights" className="hover:text-[#bf2f1f] text-[#fffde9] transition">
                Places
              </a>
            </li>
            <li>
              <a href="#activities" className="hover:text-[#bf2f1f] text-[#fffde9] transition">
                Activities
              </a>
            </li>
            <li>
              <a href="#links" className="hover:text-[#bf2f1f] text-[#fffde9] transition">
                Useful Links
              </a>
            </li>
            <li>
              <a href="/map" target="_blank" rel="noopener noreferrer" className="hover:text-[#bf2f1f] text-[#fffde9] transition">
              ✨The Map✨
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  