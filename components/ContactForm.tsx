
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2, User, Mail, MessageSquare } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const inputClasses = "w-full bg-cyber-dark/50 border-2 border-white/10 rounded-xl py-4 px-6 text-cyber-gray font-mono focus:outline-none focus:border-cyber-cyan focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300 placeholder:text-cyber-secondary/30";

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-cyber-magenta/30 bg-cyber-magenta/5 rounded text-[10px] font-mono text-cyber-magenta mb-4 tracking-[0.4em] uppercase">
            Data_Transmission_Terminal
          </div>
          <h2 className="text-4xl md:text-6xl font-orbitron font-black text-white mb-6 uppercase tracking-tighter neon-glow-text">
            СВЯЗАТЬСЯ <span className="text-cyber-magenta">С НАМИ</span>
          </h2>
          <p className="text-cyber-secondary font-mono">
            Оставьте заявку на персональную настройку нейросетей или задайте вопрос.
          </p>
        </div>

        <div className="relative">
          {/* Tech decoration corners */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-cyber-magenta/40"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-cyber-cyan/40"></div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-cyber-card/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cyber-green/10 text-cyber-green mb-6 shadow-[0_0_20px_rgba(0,255,65,0.2)]">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-orbitron font-bold text-white mb-4 uppercase">СИГНАЛ ПЕРЕДАН!</h3>
                <p className="text-cyber-secondary font-mono mb-8">Мы расшифруем ваше сообщение и ответим в ближайшее время.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-cyber-cyan font-orbitron text-xs uppercase tracking-widest hover:underline"
                >
                  ОТПРАВИТЬ ЕЩЕ ОДНО СООБЩЕНИЕ
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] font-orbitron text-cyber-cyan uppercase tracking-widest ml-1">
                      <User size={12} /> ВАШЕ ИМЯ
                    </label>
                    <input 
                      required
                      type="text" 
                      placeholder="ДЖОН ДОУ"
                      className={inputClasses}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] font-orbitron text-cyber-cyan uppercase tracking-widest ml-1">
                      <Mail size={12} /> EMAIL
                    </label>
                    <input 
                      required
                      type="email" 
                      placeholder="MAIL@CYBERPUNK.NET"
                      className={inputClasses}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[10px] font-orbitron text-cyber-cyan uppercase tracking-widest ml-1">
                    <MessageSquare size={12} /> СООБЩЕНИЕ
                  </label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="ОПИШИТЕ ВАШ ПРОЕКТ ИЛИ ЗАДАЙТЕ ВОПРОС..."
                    className={inputClasses + " resize-none"}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <div className="flex flex-col items-center">
                  <button
                    disabled={status === 'loading'}
                    type="submit"
                    className={`group relative px-12 py-5 font-orbitron text-xl font-black rounded-sm skew-x-[-12deg] transition-all duration-300 w-full md:w-auto ${
                      status === 'loading' 
                      ? 'bg-cyber-secondary/20 text-cyber-secondary cursor-not-allowed'
                      : 'bg-cyber-magenta text-white hover:shadow-[0_0_30px_rgba(255,0,255,0.5)]'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-3 skew-x-[12deg]">
                      {status === 'loading' ? (
                        <Loader2 className="animate-spin" size={24} />
                      ) : (
                        <Send size={24} className="group-hover:translate-x-1 transition-transform" />
                      )}
                      <span>{status === 'loading' ? 'ПЕРЕДАЧА...' : 'ОТПРАВИТЬ ДАННЫЕ'}</span>
                    </div>
                  </button>
                  <p className="mt-4 text-[9px] font-mono text-cyber-secondary uppercase tracking-[0.2em] opacity-50">
                    Encryption: AES-256 Enabled
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
