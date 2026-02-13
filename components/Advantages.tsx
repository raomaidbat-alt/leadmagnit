
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, BarChart, Rocket } from 'lucide-react';

const ADVANTAGES = [
  {
    icon: <Zap className="text-cyber-cyan" size={40} />,
    title: "Быстрый старт",
    description: "Готовые ТЗ для AI — не нужно быть маркетологом, чтобы получить результат."
  },
  {
    icon: <Target className="text-cyber-magenta" size={40} />,
    title: "Точное попадание",
    description: "Промпты основаны на стратегии, проверенной на 100+ бизнесах."
  },
  {
    icon: <BarChart className="text-cyber-cyan" size={40} />,
    title: "Рост прибыли",
    description: "Внедрение системы дает в среднем +30% к прибыли в первый месяц."
  },
  {
    icon: <Rocket className="text-cyber-magenta" size={40} />,
    title: "Масштабирование",
    description: "Все инструменты для перехода от хаоса к работающей воронке продаж."
  }
];

const Advantages: React.FC = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-16 bg-gradient-to-r from-cyber-cyan to-cyber-magenta text-transparent bg-clip-text neon-glow-text">
        Что внутри коллекции?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {ADVANTAGES.map((adv, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-8 bg-cyber-card rounded-2xl border border-white/5 hover:border-cyber-cyan/50 transition-all duration-300"
          >
            <div className="mb-6 drop-shadow-[0_0_8px_currentColor]">{adv.icon}</div>
            <h3 className="text-xl font-orbitron font-bold text-white mb-4 uppercase">{adv.title}</h3>
            <p className="text-cyber-secondary font-mono leading-relaxed">{adv.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
