import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import CubeIcon from '../components/CubeIcon';

export default function Home() {
  const models = [
    { name: "JIRO", color: "text-[#FF5F1F]", glow: "shadow-[#FF5F1F]/40", desc: "Starting Step" },
    { name: "GIZMO", color: "text-[#39FF14]", glow: "shadow-[#39FF14]/40", desc: "Advanced Specs" },
    { name: "JECKLE", color: "text-coral-alto", glow: "shadow-coral-alto/40", desc: "Top Performance" }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-32 pb-32 overflow-hidden">
      
      <section className="pt-20 flex flex-col md:flex-row items-center gap-12 relative">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-honey-gold/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
        
        <motion.div 
          className="flex-1 space-y-8"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeInUp}
            className="bg-honey-gold text-slate-950 px-4 py-1 rounded-sm text-[10px] font-black tracking-[0.3em] inline-block uppercase shadow-sm"
          >
            Limited Hackathon Special
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-7xl lg:text-9xl font-black italic uppercase tracking-tighter text-slate-950 leading-[0.85]"
          >
            ALTO<br/><span className="text-vivid-sky drop-shadow-sm">CUBES</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-slate-600 max-w-sm leading-relaxed font-medium"
          >
            Bringing AI straight to your desk through EDGE AI
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex gap-4 pt-4">
            <Link 
              to="/customize" 
              className="bg-slate-950 text-white px-10 py-4 rounded-full font-bold text-xs tracking-widest hover:bg-honey-gold hover:text-black transition-all shadow-xl shadow-slate-900/20 active:scale-95 text-center"
            >
              SHOP NOW
            </Link>
            
            <a 
              href="#goal" 
              className="bg-white/50 backdrop-blur-sm border-2 border-slate-200 px-10 py-4 rounded-full font-bold text-xs tracking-widest hover:border-slate-950 transition-all text-center"
            >
              LEARN MORE
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex-1 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-vivid-sky/10 blur-[100px] rounded-full animate-pulse"></div>
          <Link to="/customize" className="relative hover:rotate-2 transition-transform duration-500 cursor-pointer">
            <CubeIcon size="w-64 h-64 lg:w-[32rem] lg:h-[32rem]" />
          </Link>
        </motion.div>
      </section>

      <motion.section 
        id="goal"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative py-24 px-12 rounded-[3rem] overflow-hidden border border-white/80 shadow-2xl"
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl -z-10"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-vivid-sky/10 blur-[100px] rounded-full animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-honey-gold/10 blur-[100px] rounded-full animate-pulse [animation-delay:1s]"></div>

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-6xl lg:text-7xl font-black italic uppercase tracking-tighter text-slate-950">
              Our <span className="text-honey-gold">Goal</span>
            </h2>
            <div className="h-1.5 w-24 bg-vivid-sky mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-slate-700 text-2xl md:text-3xl leading-snug font-medium tracking-tight"
          >
            Bridging the gap between <span className="text-vivid-sky">Artificial Intelligence</span> and <span className="text-coral-alto">Modern Robotics</span>.
          </motion.p>
          
          <p className="text-slate-400 text-xs uppercase tracking-[0.5em] font-black">
            Hardware for the Applied AI Era
          </p>
        </div>
      </motion.section>

      <section>
        <div className="grid md:grid-cols-3 gap-8">
          {models.map((m, index) => (
            <motion.div 
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className={`p-10 rounded-[2.5rem] border border-slate-200 bg-white/60 backdrop-blur-md hover:border-slate-950 transition-all duration-500 group shadow-sm hover:${m.glow} hover:shadow-2xl flex flex-col`}
            >
              <div className="flex justify-center mb-10 drop-shadow-xl group-hover:scale-110 transition-transform duration-500">
                <CubeIcon size="w-32 h-32" />
              </div>
              <h3 className={`text-4xl mb-2 font-black italic uppercase ${m.color}`}>{m.name}</h3>
              <p className="text-slate-500 text-sm mb-8 font-medium italic">
                - {m.desc} -
              </p>
              <div className="mt-auto flex justify-between items-center pt-6 border-t border-slate-200">
                <span className="font-black text-slate-950 text-2xl">From $199.00</span>
                <Link 
                  to="/customize" 
                  className="text-[11px] font-black tracking-widest text-slate-950 uppercase group-hover:text-honey-gold transition-colors underline underline-offset-8 decoration-2"
                >
                  Configure →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}