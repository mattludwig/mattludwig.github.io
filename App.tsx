import React from 'react';
import { MapPin, Briefcase, Award, ArrowUpRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-6 selection:bg-white selection:text-black">
      <main className="max-w-3xl w-full space-y-16 animate-fade-in">
        
        {/* Header Section */}
        <header className="space-y-6">
          <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter leading-none">
            Matt<br />Ludwig
          </h1>
          <p className="text-xl md:text-3xl font-light text-neutral-400 tracking-wide">
            Product Marketing
          </p>
        </header>

        <div className="w-24 h-px bg-white/20" />

        {/* Bio Section */}
        <section className="space-y-8">
          <p className="text-lg md:text-2xl leading-relaxed font-light text-neutral-200">
            Based in <span className="font-normal text-white">NYC</span>. 
            I bring <span className="font-normal text-white">10+ years</span> of experience driving growth and engagement. 
            My expertise lies at the intersection of go-to-market strategy, product marketing, and developer outreach.
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="flex items-center space-x-4 text-neutral-500 group">
              <div className="p-3 border border-neutral-800 rounded-full group-hover:border-white/40 transition-colors duration-300">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="uppercase tracking-widest text-xs">New York City</span>
            </div>
            
            <div className="flex items-center space-x-4 text-neutral-500 group">
              <div className="p-3 border border-neutral-800 rounded-full group-hover:border-white/40 transition-colors duration-300">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="uppercase tracking-widest text-xs">Product Marketing Manager</span>
            </div>

            <div className="flex items-center space-x-4 text-neutral-500 group">
              <div className="p-3 border border-neutral-800 rounded-full group-hover:border-white/40 transition-colors duration-300">
                <Award className="w-5 h-5" />
              </div>
              <span className="uppercase tracking-widest text-xs">10+ Years Experience</span>
            </div>
          </div>
        </section>

        <div className="w-24 h-px bg-white/20" />

        {/* Areas of Focus */}
        <section>
          <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-8">
            Core Competencies
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Go-to-Market', 'Product Strategy', 'Developer Outreach'].map((skill) => (
              <li key={skill} className="flex flex-col space-y-2 group cursor-default">
                <span className="text-2xl font-light group-hover:pl-2 transition-all duration-300 ease-out">
                  {skill}
                </span>
                <div className="h-px w-full bg-neutral-900 group-hover:bg-neutral-600 transition-colors" />
              </li>
            ))}
          </ul>
        </section>

        {/* Footer/Contact Placeholder */}
        <footer className="pt-12 md:pt-24 flex justify-between items-end">
          <div className="text-neutral-600 text-sm">
            © {new Date().getFullYear()} Matt Ludwig
          </div>
          <a 
            href="#" 
            className="group flex items-center space-x-2 text-white border-b border-transparent hover:border-white pb-1 transition-all"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </footer>
      </main>
    </div>
  );
};

export default App;