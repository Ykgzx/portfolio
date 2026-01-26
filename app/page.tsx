// app/page.tsx
'use client';

import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* เพิ่ม padding-top ให้พอดีกับความสูงของ Navbar (h-20 = 5rem = 80px) */}
      <main className="pt-20 min-h-screen bg-gray-50">
        {/* Section Home */}
        <section 
          id="home"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white"
        >
          <div className="text-center px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90">
              Full-Stack Developer | Creative Coder | Problem Solver
            </p>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-indigo-900 font-semibold rounded-full hover:bg-indigo-100 transition transform hover:scale-105"
            >
              View My Projects →
            </button>
          </div>
        </section>

        {/* Section About */}
        <section 
          id="about"
          className="min-h-screen flex items-center justify-center bg-white py-20"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
              About Me
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-10">
              I'm a passionate developer with experience in building modern web applications 
              using Next.js, React, TypeScript, Tailwind CSS, and more. I love turning ideas 
              into beautiful, functional products.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-indigo-100 px-6 py-4 rounded-lg">
                <h3 className="font-bold text-indigo-800">Next.js</h3>
              </div>
              <div className="bg-purple-100 px-6 py-4 rounded-lg">
                <h3 className="font-bold text-purple-800">TypeScript</h3>
              </div>
              <div className="bg-pink-100 px-6 py-4 rounded-lg">
                <h3 className="font-bold text-pink-800">Tailwind CSS</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Section Projects */}
        <section 
          id="projects"
          className="min-h-screen flex items-center justify-center bg-gray-100 py-20"
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              My Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* ตัวอย่าง Project Card */}
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
                >
                  <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Project {i + 1}</h3>
                    <p className="text-gray-600 mb-4">
                      A brief description of this awesome project...
                    </p>
                    <div className="flex gap-3">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Next.js</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Tailwind</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Contact */}
        <section 
          id="contact"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white py-20"
        >
          <div className="text-center px-6 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Let's Work Together
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Have a project in mind? Let's chat!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="mailto:your@email.com"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold transition"
              >
                Email Me
              </a>
              <a 
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black rounded-full font-semibold transition"
              >
                View GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}