
import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    title: "Найдите свой тип бизнеса",
    description: "Выберите соответствующую категорию в каталоге — Стартапы, E-commerce, Местный бизнес или Эксперт."
  },
  {
    title: "Используйте Фундамент (Шаг 1-3)",
    description: "Сначала заполните первые 3 промпта — это основа. Без позиционирования и кастдева остальные промпты будут менее эффективны."
  },
  {
    title: "Копируйте и Вставляйте",
    description: "Нажмите 'Копировать', откройте Google AI Studio и вставьте текст. Добавьте свои данные в квадратные скобки [ ]."
  },
  {
    title: "Следуйте 30-дневному плану",
    description: "Не пытайтесь сделать всё сразу. Используйте чек-лист в конце коллекции, чтобы внедрять систему по неделям."
  }
];

const HowToUse: React.FC = () => {
  return (
    <section className="py-24">
      <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-20 bg-gradient-to-r from-cyber-cyan to-cyber-magenta text-transparent bg-clip-text neon-glow-text">
        Как использовать промпты?
      </h2>

      <div className="max-w-4xl mx-auto space-y-12 relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-cyan via-cyber-magenta to-transparent hidden md:block"></div>
        
        {STEPS.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <div className="flex-1 text-center md:text-right w-full">
              {idx % 2 === 0 && (
                <div className="md:pr-12">
                  <h3 className="text-2xl font-orbitron font-bold text-cyber-cyan mb-2 uppercase">{step.title}</h3>
                  <p className="text-cyber-secondary font-mono">{step.description}</p>
                </div>
              )}
            </div>
            
            <div className="relative z-10 flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-cyber-dark border-2 border-cyber-cyan flex items-center justify-center font-orbitron font-bold text-xl text-cyber-cyan shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                {idx + 1}
              </div>
            </div>

            <div className="flex-1 text-center md:text-left w-full">
              {idx % 2 !== 0 && (
                <div className="md:pl-12">
                  <h3 className="text-2xl font-orbitron font-bold text-cyber-cyan mb-2 uppercase">{step.title}</h3>
                  <p className="text-cyber-secondary font-mono">{step.description}</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowToUse;
