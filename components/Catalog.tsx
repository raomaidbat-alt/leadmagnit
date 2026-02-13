
import React, { useState, useMemo } from 'react';
import { Category } from '../types';
import PromptCard from './PromptCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Hash, Info, Lightbulb, Grid, Layout, Layers, ShieldCheck, Zap } from 'lucide-react';

interface CatalogProps {
  categories: Category[];
  activeCategoryId: string;
}

const Catalog: React.FC<CatalogProps> = ({ categories }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSector, setActiveSector] = useState<string>('all');
  const [showOnlyV2, setShowOnlyV2] = useState(false);

  // Группировка для удобства отображения
  const filteredCategories = useMemo(() => {
    return categories.map(cat => {
      const filteredPrompts = cat.prompts.filter(prompt => {
        const matchesQuery = !searchQuery || 
          prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          prompt.text.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesV2 = !showOnlyV2 || prompt.id.includes('v2') || prompt.title.includes('[V2]');
        
        return matchesQuery && matchesV2;
      });
      return { ...cat, prompts: filteredPrompts };
    }).filter(cat => cat.prompts.length > 0 && (activeSector === 'all' || cat.id === activeSector));
  }, [categories, searchQuery, activeSector, showOnlyV2]);

  const sectors = [
    { id: 'all', title: 'ВСЕ СЕКТОРЫ', icon: <Grid size={18} /> },
    { id: 'foundation', title: 'ФУНДАМЕНТ', icon: <ShieldCheck size={18} /> },
    { id: 'it_startups', title: 'IT СТАРТАПЫ', icon: <Zap size={18} /> },
    { id: 'ecommerce', title: 'E-COMMERCE', icon: <Layers size={18} /> },
    { id: 'local_business', title: 'ЛОКАЛЬНЫЙ БИЗНЕС', icon: <Layout size={18} /> },
    { id: 'bloggers', title: 'БЛОГЕРЫ/ШКОЛЫ', icon: <Hash size={18} /> },
  ];

  return (
    <section id="catalog" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-orbitron font-black text-white mb-6 uppercase tracking-tighter neon-glow-text">
          ТЕРМИНАЛ <span className="text-cyber-cyan">ПРОМПТОВ</span>
        </h2>
        <p className="text-cyber-secondary font-mono max-w-2xl mx-auto">
          Выберите свой сектор бизнеса для загрузки специализированных алгоритмов генерации.
        </p>
      </div>

      {/* Control Panel */}
      <div className="mb-12 sticky top-4 z-40">
        <div className="bg-cyber-dark/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            
            {/* Sector Tabs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {sectors.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSector(s.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-orbitron text-[10px] md:text-xs font-bold tracking-widest transition-all duration-300 border ${
                    activeSector === s.id
                      ? 'bg-cyber-cyan border-cyber-cyan text-cyber-dark shadow-[0_0_15px_#00f0ff]'
                      : 'bg-white/5 border-white/10 text-cyber-secondary hover:border-cyber-cyan/50 hover:text-white'
                  }`}
                >
                  {s.icon}
                  {s.title}
                </button>
              ))}
            </div>

            {/* Search and V2 Toggle */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto items-center">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-cyber-cyan/50" size={16} />
                <input
                  type="text"
                  placeholder="ПОИСК..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-xs font-mono text-cyber-gray focus:outline-none focus:border-cyber-cyan transition-all"
                />
              </div>
              
              <button
                onClick={() => setShowOnlyV2(!showOnlyV2)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-orbitron text-[10px] font-bold border transition-all ${
                  showOnlyV2
                    ? 'bg-cyber-magenta border-cyber-magenta text-white shadow-[0_0_15px_#ff00ff]'
                    : 'bg-white/5 border-white/10 text-cyber-magenta hover:bg-cyber-magenta/10'
                }`}
              >
                💎 ТОЛЬКО V2
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSector + searchQuery + showOnlyV2}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="space-y-20"
        >
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat) => (
              <div key={cat.id} className="relative">
                {/* Sector Container (Square) */}
                <div className="absolute -inset-4 md:-inset-8 border-2 border-dashed border-cyber-cyan/10 rounded-[2rem] pointer-events-none"></div>
                
                <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <div className="inline-block px-3 py-1 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded text-[10px] font-mono text-cyber-cyan mb-2 tracking-[0.3em]">
                      SECTOR_MODULE_LOADED
                    </div>
                    <h3 className="text-3xl md:text-5xl font-orbitron font-black text-white uppercase tracking-tighter">
                      {cat.title}
                    </h3>
                  </div>
                  
                  {cat.strategy && (
                    <div className="max-w-md bg-cyber-magenta/5 border-l-4 border-cyber-magenta p-4 rounded-r-xl">
                      <div className="flex gap-2 items-center mb-1 text-cyber-magenta font-orbitron text-[10px] font-bold uppercase">
                        <Lightbulb size={14} />
                        Стратегия успеха
                      </div>
                      <p className="text-xs font-mono text-cyber-secondary leading-relaxed">{cat.strategy}</p>
                    </div>
                  )}
                </div>

                {cat.description && (
                  <div className="mb-8 flex gap-3 items-center text-cyber-gray font-mono text-sm bg-white/5 p-4 rounded-xl border border-white/5">
                    <Info size={18} className="text-cyber-cyan shrink-0" />
                    <p>{cat.description}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-12">
                  {cat.prompts.map((prompt) => (
                    <PromptCard key={prompt.id} prompt={prompt} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="py-40 text-center border-2 border-dashed border-white/5 rounded-3xl">
              <div className="text-cyber-magenta mb-4 flex justify-center">
                <X size={64} />
              </div>
              <h4 className="text-2xl font-orbitron font-bold text-white mb-2 uppercase">Протокол не найден</h4>
              <p className="text-cyber-secondary font-mono">Соответствий вашему запросу в данном секторе не обнаружено.</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveSector('all'); setShowOnlyV2(false); }}
                className="mt-8 px-6 py-2 border border-cyber-cyan text-cyber-cyan font-orbitron text-xs rounded-lg hover:bg-cyber-cyan hover:text-cyber-dark transition-all"
              >
                СБРОСИТЬ ВСЕ ФИЛЬТРЫ
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Catalog;
