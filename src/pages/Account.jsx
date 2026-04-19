import { useState } from 'react';
import CubeIcon from '../components/CubeIcon';

export default function Account() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false); 
  const [activeTab, setActiveTab] = useState('units');

  const userBots = [
    { name: 'UNIT-01', base: 'JIRO', primary: '#FE706A', secondary: '#00CCFF', eyes: 'neutral' },
  ];

  if (!isSignedIn) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-b from-[#f8fafc] via-slate-200 to-slate-300 flex items-center justify-center p-6">
        <section className="w-full max-w-md bg-white/50 backdrop-blur-md rounded-[3rem] border border-white/60 p-10 lg:p-14 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-[10px] font-black tracking-[0.5em] text-slate-400 mb-4 uppercase">
              {isRegistering ? 'New Operator Registration' : 'Terminal Access'}
            </h2>
            <h3 className="text-5xl font-black italic uppercase tracking-tighter text-slate-950">
              {isRegistering ? 'Register' : 'Sign In'}
            </h3>
          </div>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsSignedIn(true); }}>
            {isRegistering && (
              <input 
                type="text" 
                placeholder="OPERATOR NAME" 
                className="w-full p-6 rounded-2xl border-2 border-slate-200 bg-white text-xs font-black uppercase tracking-widest outline-none focus:border-vivid-sky transition-colors"
              />
            )}
            
            <input 
              type="email" 
              placeholder="IDENTIFIER (EMAIL)" 
              className="w-full p-6 rounded-2xl border-2 border-slate-200 bg-white text-xs font-black uppercase tracking-widest outline-none focus:border-vivid-sky transition-colors"
            />
            
            <input 
              type="password" 
              placeholder="PASSCODE" 
              className="w-full p-6 rounded-2xl border-2 border-slate-200 bg-white text-xs font-black uppercase tracking-widest outline-none focus:border-vivid-sky transition-colors"
            />

            <button className="w-full bg-slate-950 text-white py-6 rounded-2xl font-black text-xs tracking-[0.3em] uppercase hover:bg-vivid-sky hover:text-slate-950 transition-all shadow-xl mt-4">
              {isRegistering ? 'Create Account →' : 'Authorize →'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <button 
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-950 transition-colors"
            >
              {isRegistering 
                ? '[ Already registered? Sign In ]' 
                : '[ No credentials? Register here ]'}
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#f8fafc] via-slate-200 to-slate-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 flex flex-col lg:flex-row gap-12">
        
        <aside className="w-full lg:w-64 flex flex-col gap-2">
          <div className="mb-8 px-4">
            <h2 className="text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">Operator Dashboard</h2>
          </div>
          {['units', 'subscription', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`p-5 rounded-2xl font-black text-xs tracking-widest uppercase text-left transition-all ${
                activeTab === tab 
                ? 'bg-slate-950 text-white shadow-lg translate-x-2' 
                : 'text-slate-500 hover:text-slate-950 hover:bg-white/40'
              }`}
            >
              {tab}
            </button>
          ))}
          <button 
            onClick={() => { setIsSignedIn(false); setIsRegistering(false); }}
            className="mt-10 p-5 text-slate-400 font-black text-[10px] tracking-widest uppercase hover:text-red-500 transition-colors text-left"
          >
            [ De-Authorize ]
          </button>
        </aside>

        <main className="flex-1 bg-white/50 backdrop-blur-md rounded-[3.5rem] border border-white/60 p-8 lg:p-14 shadow-sm min-h-[600px]">
          
          {activeTab === 'units' && (
            <div className="space-y-10">
              <header className="flex justify-between items-end">
                <div>
                  <h3 className="text-5xl font-black italic uppercase tracking-tighter">Your Units</h3>
                  <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px] mt-2">Active bot deployment</p>
                </div>
                <button 
                  onClick={() => window.location.href = '/shop'}
                  className="bg-slate-950 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-vivid-sky hover:text-slate-950 transition-all"
                >
                  + New Unit
                </button>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userBots.map((bot, i) => (
                  <div key={i} className="bg-white/40 border border-white p-8 rounded-[2.5rem] flex items-center gap-8 group hover:shadow-xl transition-all">
                    <CubeIcon 
                      size="w-24 h-24" 
                      primary={bot.primary} 
                      secondary={bot.secondary} 
                      eyeStyle={bot.eyes} 
                    />
                    <div>
                      <h4 className="font-black italic uppercase text-2xl tracking-tighter">{bot.name}</h4>
                      <p className="text-[10px] font-black text-vivid-sky tracking-widest uppercase">{bot.base} EDITION</p>
                      <button className="mt-4 text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-950 transition-colors">
                        [ Configure Unit ]
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'subscription' && (
            <div className="space-y-10">
              <header>
                <h3 className="text-5xl font-black italic uppercase tracking-tighter">Plan Status</h3>
              </header>
              <div className="bg-slate-950 p-10 rounded-[3rem] text-white">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <p className="text-[10px] font-black tracking-[0.4em] opacity-50 uppercase mb-2">Active License</p>
                    <h4 className="text-3xl font-black italic uppercase text-vivid-sky">Free Operator</h4>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-6 flex justify-between items-center">
                  <p className="text-[10px] font-black tracking-widest opacity-50 uppercase">Upgrade for multi-bot deployment</p>
                  <button className="text-[10px] font-black tracking-widest uppercase hover:text-vivid-sky transition-colors">View Plans</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-10">
              <header>
                <h3 className="text-5xl font-black italic uppercase tracking-tighter">Operator Settings</h3>
              </header>
              <div className="space-y-6 max-w-md">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Operator Name</label>
                  <input type="text" placeholder="NAME" className="w-full p-5 rounded-2xl border-2 border-slate-200 bg-white font-black italic uppercase outline-none focus:border-vivid-sky" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Communication Hub</label>
                  <input type="email" placeholder="EMAIL" className="w-full p-5 rounded-2xl border-2 border-slate-200 bg-white font-black italic uppercase outline-none focus:border-vivid-sky" />
                </div>
                <button className="bg-slate-950 text-white px-10 py-5 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-vivid-sky hover:text-slate-950 transition-all">
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}