
import React, { useState } from 'react';
import { Prompt } from '../types';
import { Copy, Check, Info, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface PromptCardProps {
  prompt: Prompt;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt }) => {
  const [copied, setCopied] = useState(false);
  const isV2 = prompt.id.includes('v2') || prompt.title.includes('💎');

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-500 group ${
        isV2 
          ? 'border-cyber-magenta/30 bg-gradient-to-br from-cyber-card to-cyber-magenta/5 shadow-[0_0_30px_rgba(255,0,255,0.05)]' 
          : 'border-white/5 bg-cyber-card hover:border-cyber-cyan/30'
      }`}
    >
      {/* Decorative V2 Badge */}
      {isV2 && (
        <div className="absolute top-0 right-0">
          <div className="bg-cyber-magenta text-white text-[8px] font-black font-orbitron px-4 py-1 rotate-45 translate-x-4 translate-y-2 shadow-lg">
            PREMIUM V2
          </div>
        </div>
      )}

      <div className="p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-lg ${isV2 ? 'bg-cyber-magenta/10 text-cyber-magenta' : 'bg-cyber-cyan/10 text-cyber-cyan'}`}>
              {isV2 ? <Zap size={24} /> : <Shield size={24} />}
            </div>
            <div>
              <h4 className={`text-xl md:text-2xl font-orbitron font-black uppercase tracking-tight ${isV2 ? 'text-cyber-magenta' : 'text-cyber-cyan'}`}>
                {prompt.title}
              </h4>
              <p className="text-[10px] font-mono text-cyber-secondary uppercase tracking-[0.2em] mt-1">
                ID_PROTOCOL: {prompt.id.toUpperCase()}
              </p>
            </div>
          </div>
          
          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-orbitron text-xs font-bold uppercase transition-all ${
              copied 
                ? 'bg-cyber-green text-cyber-dark shadow-[0_0_20px_#00ff41]' 
                : isV2
                  ? 'bg-transparent border-2 border-cyber-magenta text-cyber-magenta hover:bg-cyber-magenta hover:text-white'
                  : 'bg-transparent border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-dark'
            }`}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? 'ГОТОВО' : 'КОПИРОВАТЬ'}</span>
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="w-1 h-full min-h-[40px] bg-gradient-to-b from-white/20 to-transparent"></div>
            <p className="text-cyber-gray font-mono text-sm leading-relaxed">
              {prompt.description}
            </p>
          </div>

          <div className="relative">
            <div className="absolute -top-3 left-6 px-3 bg-cyber-card text-[9px] font-mono text-cyber-secondary uppercase border border-white/5">
              PROMPT_TERMINAL_DATA
            </div>
            <div className="bg-black/40 p-6 md:p-8 rounded-2xl border border-white/5 font-code text-sm md:text-base text-cyber-gray/90 whitespace-pre-wrap max-h-[500px] overflow-y-auto custom-scrollbar">
              {prompt.text}
            </div>
          </div>

          {prompt.instructions && (
            <div className="flex gap-3 items-center bg-white/5 p-4 rounded-xl border border-white/5">
              <Info size={16} className="text-cyber-cyan" />
              <p className="text-[11px] font-mono text-cyber-secondary italic">
                {prompt.instructions}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PromptCard;
