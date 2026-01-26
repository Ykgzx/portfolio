"use client";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // ปรับตามความสูง navbar + ช่องว่าง
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full h-20 bg-black text-white fixed top-0 left-0 flex items-center justify-between px-6 md:px-10 z-50">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      
      <div className="flex space-x-8 md:space-x-16">
        <button 
          onClick={() => scrollToSection("home")}
          className="hover:text-gray-300 transition-colors"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection("about")}
          className="hover:text-gray-300 transition-colors"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection("projects")}
          className="hover:text-gray-300 transition-colors"
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToSection("contact")}
          className="hover:text-gray-300 transition-colors"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}