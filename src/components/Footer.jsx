export default function Footer() {
  return (
    <footer className="py-24 bg-[#34322B] text-[#f8f1f6]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-[#bf2f1f] mb-4">
          My Lublin Blog
        </h3>
        <p className="mb-6 text-[#fffde9]">
          Sharing my favorite cafes, sights, and useful links around Lublin, Poland.
        </p>
        <div className="flex justify-center gap-6 mb-4 text-[#fffde9]">
          <a href="#" className="hover:text-[#bf2f1f] transition">Instagram</a>
          <a href="#" className="hover:text-[#bf2f1f] transition">Facebook</a>
          <a href="#" className="hover:text-[#bf2f1f] transition">Twitter</a>
        </div>
        <p className="text-sm text-[#f8f1f6]/70">
          &copy; {new Date().getFullYear()} My Lublin Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
