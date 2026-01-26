// app/page.tsx
'use client';

import Navbar from './components/Navbar';
import { 
  SiTailwindcss, 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiHtml5, 
  SiCss3, 
  SiGithub, 
  SiPostman, 
  SiFigma,
  SiDocker,
  SiGit,
  SiVercel,
  SiGooglechrome,
  SiNotion,
  SiLinear,
  SiDiscord,
  SiGmail,
  SiPhonepe,
  SiLine,
  SiFacebook,
  SiInstagram,
} from "react-icons/si";

import { VscCode, VscTerminal } from "react-icons/vsc";
import { FaRobot } from "react-icons/fa";

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

        {/* Section Skills */}
        <section 
          id="skills"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-black to-gray-900 py-20 text-white"
        >
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                Skills
              </h2>
              <div className="w-32 h-1 bg-emerald-500 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
              {[
                { name: "HTML", icon: <SiHtml5 className="text-5xl md:text-6xl text-orange-500" /> },
                { name: "CSS", icon: <SiCss3 className="text-5xl md:text-6xl text-blue-400" /> },
                { name: "JavaScript", icon: <SiJavascript className="text-5xl md:text-6xl text-yellow-400" /> },
                { name: "TypeScript", icon: <SiTypescript className="text-5xl md:text-6xl text-blue-500" /> },
                { name: "React", icon: <SiReact className="text-5xl md:text-6xl text-cyan-400" /> },
                { name: "Next.js", icon: <SiNextdotjs className="text-5xl md:text-6xl text-white" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-5xl md:text-6xl text-teal-400" /> },
                { name: "Python", icon: <SiPython className="text-5xl md:text-6xl text-yellow-500" /> },
                { name: "GitHub", icon: <SiGithub className="text-5xl md:text-6xl text-white" /> },
                { name: "VS Code", icon: <VscCode className="text-5xl md:text-6xl text-blue-500" /> },
                { name: "Postman", icon: <SiPostman className="text-5xl md:text-6xl text-orange-600" /> },
                { name: "UX/UI Design", icon: <SiFigma className="text-5xl md:text-6xl text-pink-400" /> },
                { name: "Robot Framework", icon: <FaRobot className="text-5xl md:text-6xl text-red-500" /> },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="group bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center transition-all duration-300 hover:bg-gray-700/80 hover:border-emerald-500/60 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
                >
                  <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                    {skill.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-center text-gray-200 group-hover:text-emerald-400 transition-colors">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Tools */}
        <section 
          id="tools"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-black to-gray-900 py-20 text-white"
        >
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                Tools
              </h2>
              <div className="w-32 h-1 bg-emerald-500 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
              {[
                { name: "VS Code", icon: <VscCode className="text-5xl md:text-6xl text-blue-500" /> },
                { name: "GitHub", icon: <SiGithub className="text-5xl md:text-6xl text-white" /> },
                { name: "Figma", icon: <SiFigma className="text-5xl md:text-6xl text-pink-400" /> },
                { name: "Postman", icon: <SiPostman className="text-5xl md:text-6xl text-orange-600" /> },
                { name: "Terminal", icon: <VscTerminal className="text-5xl md:text-6xl text-green-400" /> },
                { name: "Docker", icon: <SiDocker className="text-5xl md:text-6xl text-blue-400" /> },
                { name: "Git", icon: <SiGit className="text-5xl md:text-6xl text-orange-500" /> },
                { name: "Vercel", icon: <SiVercel className="text-5xl md:text-6xl text-white" /> },
                { name: "Chrome DevTools", icon: <SiGooglechrome className="text-5xl md:text-6xl text-red-500" /> },
                { name: "Notion", icon: <SiNotion className="text-5xl md:text-6xl text-white" /> },
                { name: "Linear", icon: <SiLinear className="text-5xl md:text-6xl text-pink-500" /> },
                { name: "Discord", icon: <SiDiscord className="text-5xl md:text-6xl text-indigo-400" /> },
              ].map((tool, index) => (
                <div
                  key={index}
                  className="group bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center transition-all duration-300 hover:bg-gray-700/80 hover:border-emerald-500/60 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
                >
                  <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                    {tool.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-center text-gray-200 group-hover:text-emerald-400 transition-colors">
                    {tool.name}
                  </h3>
                </div>
              ))}
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

        {/* Section Contact - ปรับใหม่สวยงาม */}
        <section 
          id="contact"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white py-20"
        >
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Let's Work Together
            </h2>
            <p className="text-xl md:text-2xl mb-16 opacity-90 max-w-3xl mx-auto">
              Interested in collaborating or have any questions? Feel free to reach out via any of these channels!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Email */}
              <a 
                href="mailto:your@email.com"
                className="group flex flex-col items-center p-6 bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl transition-all duration-300 hover:bg-gray-700/80 hover:border-emerald-500/60 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
              >
                <SiGmail className="text-5xl md:text-6xl text-red-400 mb-4 transition-transform group-hover:scale-110" />
                <h3 className="text-lg font-semibold text-gray-200 group-hover:text-emerald-400 transition-colors">
                  Email
                </h3>
                <p className="text-sm text-gray-400 mt-1">your@email.com</p>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl transition-all duration-300 hover:bg-gray-700/80 hover:border-emerald-500/60 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
              >
                <SiGithub className="text-5xl md:text-6xl text-white mb-4 transition-transform group-hover:scale-110" />
                <h3 className="text-lg font-semibold text-gray-200 group-hover:text-emerald-400 transition-colors">
                  GitHub
                </h3>
                <p className="text-sm text-gray-400 mt-1">@yourusername</p>
              </a>

              {/* Phone */}
              <div className="group flex flex-col items-center p-6 bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl transition-all duration-300 hover:bg-gray-700/80 hover:border-emerald-500/60 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
                <SiPhonepe className="text-5xl md:text-6xl text-green-400 mb-4 transition-transform group-hover:scale-110" />
                <h3 className="text-lg font-semibold text-gray-200 group-hover:text-emerald-400 transition-colors">
                  Phone
                </h3>
                <p className="text-sm text-gray-400 mt-1">+66 123-456-7890</p>
              </div>

              {/* Line */}
              <div className="group flex flex-col items-center p-6 bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl transition-all duration-300 hover:bg-gray-700/80 hover:border-emerald-500/60 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
                <SiLine className="text-5xl md:text-6xl text-green-500 mb-4 transition-transform group-hover:scale-110" />
                <h3 className="text-lg font-semibold text-gray-200 group-hover:text-emerald-400 transition-colors">
                  Line
                </h3>
                <p className="text-sm text-gray-400 mt-1">@yourlineid</p>
              </div>

              {/* Facebook */}
              <div className="group flex flex-col items-center p-6 bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl transition-all duration-300 hover:bg-gray-700/80 hover:border-emerald-500/60 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
                <SiFacebook className="text-5xl md:text-6xl text-blue-500 mb-4 transition-transform group-hover:scale-110" />
                <h3 className="text-lg font-semibold text-gray-200 group-hover:text-emerald-400 transition-colors">
                  Facebook
                </h3>
                <p className="text-sm text-gray-400 mt-1">yourfacebook</p>
              </div>

              {/* Instagram */}
              <div className="group flex flex-col items-center p-6 bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl transition-all duration-300 hover:bg-gray-700/80 hover:border-emerald-500/60 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
                <SiInstagram className="text-5xl md:text-6xl text-pink-500 mb-4 transition-transform group-hover:scale-110" />
                <h3 className="text-lg font-semibold text-gray-200 group-hover:text-emerald-400 transition-colors">
                  Instagram
                </h3>
                <p className="text-sm text-gray-400 mt-1">@yourinstagram</p>
              </div>
            </div>

            <p className="mt-16 text-lg opacity-80">
              Looking forward to hearing from you! 🚀
            </p>
          </div>
        </section>
      </main>
    </>
  );
}