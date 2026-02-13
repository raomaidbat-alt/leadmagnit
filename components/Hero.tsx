
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Rocket, ShieldCheck, Zap, Activity, Terminal, Cpu } from 'lucide-react';

interface HeroProps {
  promptCount: number;
}

const Hero: React.FC<HeroProps> = ({ promptCount }) => {
  const [displayCount, setDisplayCount] = useState(0);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, -100]);

  useEffect(() => {
    let start = 0;
    const end = promptCount;
    if (start === end) return;
    
    let timer = setInterval(() => {
      start += Math.ceil(end / 50);
      if (start >= end) {
        setDisplayCount(end);
        clearInterval(timer);
      } else {
        setDisplayCount(start);
      }
    }, 30);
    
    return () => clearInterval(timer);
  }, [promptCount]);

  const stats = [
    { label: "ROI", value: "300%+", icon: <Activity size={14} className="text-cyber-cyan" /> },
    { label: "СКОРОСТЬ", value: "10X", icon: <Zap size={14} className="text-cyber-magenta" /> },
    { label: "БЕЗОПАСНО", value: "100%", icon: <ShieldCheck size={14} className="text-cyber-green" /> }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden bg-black">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="scanline-effect animate-scanline opacity-30"></div>
        {/* Floating Data Bits */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '110vh', x: `${Math.random() * 100}vw`, opacity: 0 }}
            animate={{ 
              y: '-10vh', 
              opacity: [0, 0.5, 0],
            }}
            transition={{ 
              duration: 5 + Math.random() * 10, 
              repeat: Infinity, 
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute text-[8px] font-mono text-cyber-cyan/20 whitespace-nowrap"
          >
            {Math.random() > 0.5 ? '01011101' : 'FETCH_DATA_SUCCESS'}
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{ opacity, y }}
        className="max-w-6xl z-10 relative"
      >
        {/* Decorative Tech Borders for the whole section */}
        <div className="absolute -top-12 -left-12 w-24 h-24 border-t-2 border-l-2 border-cyber-cyan opacity-20 hidden lg:block"></div>
        <div className="absolute -bottom-12 -right-12 w-24 h-24 border-b-2 border-r-2 border-cyber-magenta opacity-20 hidden lg:block"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-6 py-2 mb-10 rounded-sm border border-cyber-cyan/40 bg-cyber-cyan/10 backdrop-blur-xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <Terminal size={14} className="text-cyber-cyan" />
          <span className="text-xs md:text-sm font-orbitron font-bold text-cyber-cyan uppercase tracking-[0.4em]">
            Protocol 2.0.7.7 | Live Connection
          </span>
        </motion.div>

        <h1 className="text-6xl md:text-9xl font-black font-orbitron mb-8 leading-[0.9] tracking-tighter">
          <span 
            className="glitch-text block bg-gradient-to-r from-cyber-cyan via-white to-cyber-cyan bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]"
            data-text="ВЗЛОМАЙ"
          >
            ВЗЛОМАЙ
          </span>
          <span 
            className="block text-white neon-glow-text relative"
          >
            МАРКЕТИНГ
            <motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
              className="absolute -right-8 top-0 text-cyber-magenta text-4xl"
            >
              _
            </motion.span>
          </span>
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-14">
          <p className="text-xl md:text-3xl font-mono text-cyber-gray/80 max-w-2xl leading-tight">
            <span className="text-cyber-cyan font-bold bg-cyber-cyan/10 px-2 underline decoration-cyber-cyan/30 underline-offset-8">
              {displayCount}+
            </span> промптов для захвата рынка через <span className="text-white font-bold italic">AI Studio</span>.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12">
          {/* Main Pulsing CTA */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-cyan to-cyber-magenta rounded-sm blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative px-12 py-6 bg-black border-2 border-cyber-cyan font-orbitron text-white text-2xl font-black transition-all duration-300 flex items-center gap-4 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-cyber-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <Rocket size={28} className="text-cyber-cyan group-hover:animate-bounce" />
              <span className="relative z-10 tracking-widest">АКТИВИРОВАТЬ ПАКЕТ</span>
              <Cpu size={20} className="text-cyber-magenta opacity-50" />
            </motion.button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-6 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="group cursor-default"
              >
                <div className="flex items-center justify-center gap-2 mb-2 text-cyber-secondary group-hover:text-cyber-cyan transition-colors">
                  {stat.icon}
                  <span className="text-[10px] font-mono uppercase tracking-widest">{stat.label}</span>
                </div>
                <div className="text-2xl md:text-3xl font-orbitron font-black text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator with Tech Polish */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 cursor-pointer z-10 hidden sm:flex flex-col items-center gap-3"
        onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-6 h-10 border-2 border-cyber-cyan/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-cyber-cyan rounded-full"
          />
        </div>
        <span className="text-[9px] font-mono text-cyber-cyan/50 uppercase tracking-[0.5em]">System_Scroll</span>
      </motion.div>

      {/* Extreme Neon Overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cyber-cyan/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
