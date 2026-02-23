/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ArrowRight, 
  Wallet, 
  Router, 
  Smartphone, 
  ExternalLink, 
  Activity,
  Coins,
  AirVent,
  CreditCard,
  Wifi,
  LayoutDashboard
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#101622]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full glass-card border-b border-white/10 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg flex items-center justify-center text-white">
              <CreditCard size={20} />
            </div>
            <h1 className="text-xl font-extrabold tracking-tight text-white">JeanPay</h1>
          </div>          
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 py-16 md:py-24">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Nueva Era de Pagos
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-7xl font-black leading-tight tracking-tight text-white max-w-4xl"
            >
              Moderniza tus <span className="text-primary">máquinas dispensadoras</span> y machine vending con JeanPay
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 max-w-2xl"
            >
              Lleva tu negocio al siguiente nivel con <strong>pagos online</strong> integrados. Conecta tus ventas físicas con <strong>Yappy</strong> y mantén el control total desde nuestra <strong>aplicación móvil</strong> disponible para Android e iOS app.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full justify-center"
            >
              <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group">
                Llamanos al +50763786669                
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-12 w-full max-w-4xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group"
            >
              <div className="aspect-video bg-slate-900 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#101622] via-transparent to-transparent z-10"></div>
                <img 
                  alt="Machine vending moderna con sistema de pagos online JeanPay" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1575224526797-5730d09d781d?auto=format&fit=crop&q=80&w=1200&h=800"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20">
                    <Coins className="text-white animate-pulse" size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-white text-xs font-medium opacity-70">Ventas sin Internet</p>
                    <p className="text-white font-bold">Recibe pagos con Yappy</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-bold text-white mb-4">Solución Integral</motion.h2>
              <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-slate-400">Tecnología diseñada para maximizar tus ingresos y simplificar tu gestión.</motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-2xl border border-white/10 bg-[#101622] hover:border-primary/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Wallet size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Intermediario Yappy</h3>
                <p className="text-slate-400 leading-relaxed">
                  Pagos rápidos y seguros directamente a tu cuenta bancaria sin complicaciones técnicas.
                </p>
              </motion.div>
              {/* Feature 2 */}
              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.3 }}
                className="p-8 rounded-2xl border border-white/10 bg-[#101622] hover:border-primary/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Wifi size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Hardware IoT</h3>
                <p className="text-slate-400 leading-relaxed">
                  Conexión constante con Bluetooth para los Pagos.
                </p>
              </motion.div>
              {/* Feature 3 */}
              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.4 }}
                className="p-8 rounded-2xl border border-white/10 bg-[#101622] hover:border-primary/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <LayoutDashboard size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">App Móvil Multiplataforma</h3>
                <p className="text-slate-400 leading-relaxed">
                  Gestiona tus ventas y el estado de tus máquinas en tiempo real. Nuestra <strong>aplicación móvil</strong> está optimizada para <strong>Android</strong> y disponible como <strong>iOS app</strong>.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="px-4 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-bold text-white mb-6">Cómo Funciona el Sistema de Pagos</motion.h2>
              <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="h-1.5 w-24 bg-primary mx-auto rounded-full"></motion.div>
            </div>
            
            <div className="relative">
              {/* Progress Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/5 z-0"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
                {/* Step 1 */}
                <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-3xl font-black mb-8 border-4 border-[#101622] shadow-2xl shadow-primary/30">
                    1
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Instala el hardware IoT</h4>
                  <p className="text-slate-400">Integración física sencilla en cualquier modelo de <strong>máquina dispensadora</strong> o machine vending que tenga MDB.</p>
                </motion.div>
                {/* Step 2 */}
                <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-3xl font-black mb-8 border-4 border-[#101622] shadow-2xl shadow-primary/30">
                    2
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Configura tu Empresa</h4>
                  <p className="text-slate-400">Vincula tu empresa y personaliza tus precios de <strong>pagos online</strong> en menos de 5 minutos.</p>
                </motion.div>
                {/* Step 3 */}
                <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-3xl font-black mb-8 border-4 border-[#101622] shadow-2xl shadow-primary/30">
                    3
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Recibe pagos por Yappy</h4>
                  <p className="text-slate-400">Tus clientes hacen el pago por JeanPay y lo Apruebas con <strong>Yappy</strong>.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 py-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto rounded-[2rem] bg-primary p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-8">¿Listo para modernizar tus máquinas dispensadoras?</h2>
              <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                Únete a cientos de emprendedores que ya están digitalizando sus ventas y aceptando <strong>pagos online</strong> con JeanPay.
              </p>
              <button className="bg-white text-primary hover:bg-slate-100 font-bold py-5 px-12 rounded-2xl transition-all shadow-2xl inline-flex items-center gap-3 text-lg group">
                Descargar Aplicación Móvil
                <ExternalLink size={20} className="group-hover:rotate-12 transition-transform" />
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 px-4 py-16 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary/20 p-2 rounded text-primary">
                <CreditCard size={24} />
              </div>
              <span className="text-2xl font-black text-white">JeanPay</span>
            </div>
            <p className="text-slate-400 text-center md:text-left max-w-xs">
              Potenciando el comercio de <strong>machine vending</strong> con tecnología IoT y <strong>pagos online</strong> de última generación para <strong>Android</strong> e <strong>iOS app</strong>.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-8">
              <a className="text-slate-400 hover:text-primary transition-colors font-medium" href="#">Términos</a>
              <a className="text-slate-400 hover:text-primary transition-colors font-medium" href="#">Privacidad</a>
              <a className="text-slate-400 hover:text-primary transition-colors font-medium" href="#">Soporte</a>
            </div>
            <p className="text-sm text-slate-500 font-medium">
              © 2026 BitBug Soluciones. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
