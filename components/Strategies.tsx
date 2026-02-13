
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  ShoppingBag, 
  MapPin, 
  Users, 
  CheckCircle2, 
  Linkedin, 
  Instagram, 
  Search, 
  Send, 
  Youtube, 
  Navigation,
  Smartphone
} from 'lucide-react';

const STRATEGIES = [
  {
    id: 'it',
    title: 'IT СТАРТАПЫ',
    subtitle: 'B2B & SaaS FOCUS',
    icon: <Monitor size={32} />,
    brands: [<Linkedin key="li" size={18} />, <Search key="se" size={18} />, <Youtube key="yt" size={18} />],
    color: 'cyber-cyan',
    channels: [
      'Google/Яндекс: Контекст на боли',
      'LinkedIn: Прямой выход на ЛПР',
      'YouTube: Демо-обзоры продукта',
      'Сайт: Конвертер в Free Trial',
      'Telegram: Кейсы и апдейты'
    ]
  },
  {
    id: 'ecom',
    title: 'E-COMMERCE',
    subtitle: 'RETAIL & SCALE',
    icon: <ShoppingBag size={32} />,
    brands: [<Instagram key="ig" size={18} />, <Smartphone key="tt" size={18} />, <Search key="ga" size={18} />],
    color: 'cyber-magenta',
    channels: [
      'Instagram/TikTok: Виральные Reels',
      'Google Shopping: Товарная выдача',
      'Маркетплейсы: Rich-контент',
      'UGC: Обзоры от блогеров',
      'WhatsApp: Ретаргетинг базы'
    ]
  },
  {
    id: 'local',
    title: 'ЛОКАЛ-БИЗНЕС',
    subtitle: 'GEO & MAPS FOCUS',
    icon: <MapPin size={32} />,
    brands: [<Navigation key="maps" size={18} />, <MapPin key="geo" size={18} />, <Search key="ym" size={18} />],
    color: 'cyber-cyan',
    channels: [
      '2GIS/Яндекс: ТОП в картах',
      'Локальный SEO: "рядом со мной"',
      'Reels: Геотеги заведения',
      'Stories: Прайс и отзывы',
      'Первый визит: Оффер-магнит'
    ]
  },
  {
    id: 'bloggers',
    title: 'БЛОГЕРЫ & ШКОЛЫ',
    subtitle: 'TRUST & EDUCATION',
    icon: <Users size={32} />,
    brands: [<Send key="tg" size={18} />, <Instagram key="ig2" size={18} />, <Youtube key="yt2" size={18} />],
    color: 'cyber-magenta',
    channels: [
      'Telegram: Прогревы и польза',
      'Instagram: Ежедневный сторителл',
      'YouTube: Мастер-классы',
      'Лид-магниты: Чек-листы/гайды',
      'Вебинары: Прямые продажи'
    ]
  }
];

const Strategies: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 border border-cyber-cyan/30 bg-cyber-cyan/5 rounded text-[10px] font-mono text-cyber-cyan mb-6 tracking-[0.5em] uppercase"
          >
            Tactical_Marketing_Matrix
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-orbitron font-black text-white mb-6 uppercase tracking-tighter neon-glow-text">
            ЯДРО СТРАТЕГИИ <span className="text-cyber-cyan">ПО НИШАМ</span>
          </h2>
          <p className="text-cyber-secondary font-mono max-w-2xl mx-auto text-sm md:text-base">
            Алгоритмы захвата внимания в зависимости от архитектуры вашего бизнеса. 
            <br className="hidden md:block" /> Выбирайте канал, где ваш клиент наиболее уязвим.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STRATEGIES.map((strat, idx) => (
            <motion.div
              key={strat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              {/* Outer Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-b from-transparent to-${strat.color}/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative h-full bg-cyber-card/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col transition-all duration-300 group-hover:bg-cyber-card/60 group-hover:border-white/20">
                
                {/* Header Section */}
                <div className="flex items-start justify-between mb-8">
                  <div className={`p-4 rounded-xl bg-black/40 border border-${strat.color}/30 text-${strat.color} shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                    {strat.icon}
                  </div>
                  <div className="flex gap-2">
                    {strat.brands.map((brand, bIdx) => (
                      <div key={bIdx} className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-cyber-secondary hover:text-${strat.color} transition-colors border border-white/5`}>
                        {brand}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <div className="mb-8">
                  <div className={`text-[10px] font-orbitron font-bold text-${strat.color} tracking-widest mb-1`}>
                    {strat.subtitle}
                  </div>
                  <h3 className="text-2xl font-orbitron font-black text-white uppercase tracking-tight">
                    {strat.title}
                  </h3>
                </div>

                {/* Channels List */}
                <div className="space-y-4 flex-grow mb-10">
                  {strat.channels.map((channel, cIdx) => (
                    <div key={cIdx} className="flex gap-3 items-start group/item">
                      <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-${strat.color} shadow-[0_0_5px_currentColor]`}></div>
                      <span className="text-xs md:text-sm font-mono text-cyber-gray/80 leading-relaxed group-hover/item:text-white transition-colors">
                        {channel}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Footer */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[9px] font-mono text-cyber-secondary uppercase tracking-widest">
                    <CheckCircle2 size={12} className={`text-${strat.color}`} />
                    READY_FOR_DEPLOY
                  </div>
                  <div className="text-[8px] font-mono text-white/10 uppercase">
                    MOD_{strat.id.toUpperCase()}
                  </div>
                </div>

                {/* Hover Line Animation */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-${strat.color} group-hover:w-1/2 transition-all duration-500 rounded-full shadow-[0_0_10px_currentColor]`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Extreme Neon Accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyber-magenta/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default Strategies;
