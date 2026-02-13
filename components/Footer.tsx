
import React, { useState } from 'react';
import { Send, Globe, Mail, Share2, ArrowUp, Check } from 'lucide-react';

const Footer: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <footer className="bg-[#05071a] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Final CTA */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-orbitron font-black text-white mb-6 uppercase tracking-tighter neon-glow-text">
            Начни использовать <span className="text-cyber-magenta">прямо сейчас</span>
          </h2>
          <p className="text-cyber-secondary font-mono text-lg mb-10">
            Все промпты доступны бесплатно и навсегда. Вернитесь к каталогу и выберите тот, который нужен вам сегодня.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-8 py-4 bg-cyber-magenta/10 border-2 border-cyber-magenta text-cyber-magenta rounded-xl font-orbitron font-bold uppercase transition-all duration-300 hover:bg-cyber-magenta hover:text-white shadow-[0_0_20px_rgba(255,0,255,0.3)] flex items-center gap-2"
            >
              <ArrowUp size={20} />
              В начало каталога
            </button>

            <button 
              onClick={handleShare}
              className={`px-8 py-4 rounded-xl font-orbitron font-bold uppercase transition-all duration-300 border-2 flex items-center gap-2 ${
                copiedLink 
                  ? 'bg-cyber-green/10 border-cyber-green text-cyber-green'
                  : 'bg-transparent border-white/20 text-white hover:bg-white/10'
              }`}
            >
              {copiedLink ? <Check size={20} /> : <Share2 size={20} />}
              {copiedLink ? 'Ссылка скопирована!' : 'Поделиться'}
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 py-8 border-y border-white/5">
          <a href="#" className="flex items-center gap-3 text-cyber-secondary hover:text-cyber-cyan transition-colors group">
            <div className="p-3 rounded-lg bg-white/5 group-hover:bg-cyber-cyan/10">
              <Send size={20} />
            </div>
            <span className="font-mono">Мой Telegram</span>
          </a>
          <a href="#" className="flex items-center gap-3 text-cyber-secondary hover:text-cyber-magenta transition-colors group">
            <div className="p-3 rounded-lg bg-white/5 group-hover:bg-cyber-magenta/10">
              <Globe size={20} />
            </div>
            <span className="font-mono">Больше материалов</span>
          </a>
          <a href="mailto:contact@example.com" className="flex items-center gap-3 text-cyber-secondary hover:text-cyber-cyan transition-colors group">
            <div className="p-3 rounded-lg bg-white/5 group-hover:bg-cyber-cyan/10">
              <Mail size={20} />
            </div>
            <span className="font-mono">Связаться</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-cyber-secondary font-mono text-sm opacity-60">
          <p>© 2026 CYBERPROMPT PROJECT. Все промпты предоставлены бесплатно для личного использования.</p>
          <div className="mt-2 flex justify-center gap-6">
            <span className="hover:text-cyber-cyan cursor-pointer">Privacy Policy</span>
            <span className="hover:text-cyber-magenta cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
