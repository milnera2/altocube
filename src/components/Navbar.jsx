import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 px-12 py-6 flex justify-between items-center">
      <Link 
        to="/" 
        className="text-3xl font-black text-honey-gold italic tracking-tighter hover:opacity-80 transition-opacity"
      >
        ALTO
      </Link>
      
      <div className="flex items-center gap-8">
        <Link 
          to="/customize" 
          className="bg-honey-gold text-black px-10 py-3 rounded-full font-black text-[11px] tracking-[0.25em] hover:bg-black hover:text-white transition-all shadow-md uppercase"
        >
          Shop ALTO
        </Link>

        <Link 
          to="/account" 
          className="text-slate-900 hover:text-honey-gold transition-colors"
          aria-label="Account"
        >
          <UserCircleIcon className="w-7 h-7" />
        </Link>
      </div>
    </nav>
  );
}