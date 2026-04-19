import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white/95 backdrop-blur-md border-t border-slate-100 px-12 py-10 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-2xl font-black italic text-honey-gold tracking-tighter">ALTO</div>
          <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
            © 2026. All Rights Reserved.
          </p>
        </div>

        {/* Navigation Side */}
        <div className="flex gap-10 text-[10px] font-black tracking-[0.3em] text-slate-900 uppercase">
          <a href="#goal" className="hover:text-honey-gold transition-colors">OUR GOAL</a>
          <Link to="/customize" className="hover:text-vivid-sky transition-colors">SHOP</Link>
          <Link to="/account" className="hover:text-coral-alto transition-colors">ACCOUNT</Link>
        </div>

      </div>
    </footer>
  );
}