import { useState } from 'react';
import CubeIcon from '../components/CubeIcon';

export default function Customizer() {
  const [step, setStep] = useState(0);
  const [isBuilding, setIsBuilding] = useState(false);
  const [formData, setFormData] = useState({
    base: 'JIRO',
    primaryColor: '#FE706A',
    secondaryColor: '#00CCFF',
    eyeStyle: 'neutral',
    cubeName: '',
    plan: 'Basic',
    address: '',
    payment: ''
  });

  const bases = [
    { id: 'JIRO', desc: 'Agile & Efficient' },
    { id: 'GIZMO', desc: 'Standard Protocol' },
    { id: 'JECKLE', desc: 'Maximum Specs' }
  ];

  const eyeStyles = ['neutral', 'happy', 'angry', 'detective', 'cyclops', 'dead'];

  const nextStep = () => {
    if (step === 4) {
      setIsBuilding(true);
    } else {
      setStep(s => s + 1);
    }
  };

  const prevStep = () => setStep(s => Math.max(0, s - 1));

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#f8fafc] via-slate-200 to-slate-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* LEFT SIDE: PREVIEW */}
        <section className="flex-1 sticky top-24 h-fit bg-white/30 backdrop-blur-2xl rounded-[3.5rem] p-16 border border-white/50 shadow-2xl flex flex-col items-center justify-center text-center">
          <h2 className="text-[10px] font-black tracking-[0.5em] text-slate-400 mb-12 uppercase">Unit Preview</h2>
          
          <CubeIcon 
            size="w-64 h-64 lg:w-96 lg:h-96" 
            primary={formData.primaryColor} 
            secondary={formData.secondaryColor}
            eyeStyle={formData.eyeStyle}
          />

          <div className="mt-12 space-y-2">
            <p className="text-4xl font-black italic uppercase text-slate-950 tracking-tighter">
              {formData.cubeName || 'Unnamed Cube'}
            </p>
            <p className="text-xs font-black text-vivid-sky uppercase tracking-[0.3em]">
              {formData.base} EDITION
            </p>
          </div>
        </section>

        {/* RIGHT SIDE: CONFIGURATION OR SUCCESS MESSAGE */}
        <section className="flex-1 bg-white/50 backdrop-blur-md rounded-[3.5rem] border border-white/60 p-8 lg:p-14 shadow-sm min-h-[600px] flex flex-col">
          
          {!isBuilding ? (
            <>
              {/* PHASES 01 - 05 */}
              <div className="mb-12">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-950">
                  Phase 0{step + 1} <span className="text-slate-400">// 05</span>
                </span>
              </div>

              <div className="flex-grow">
                {step === 0 && (
                  <div className="space-y-6">
                    <h3 className="text-5xl font-black italic uppercase tracking-tighter">Choose Base</h3>
                    <div className="grid gap-3">
                      {bases.map(b => (
                        <button key={b.id} onClick={() => setFormData({...formData, base: b.id})} className={`p-6 rounded-2xl border-2 text-left transition-all ${formData.base === b.id ? 'border-slate-950 bg-white shadow-lg' : 'border-slate-200 hover:border-slate-400'}`}>
                          <span className="block font-black text-xl italic uppercase">{b.id}</span>
                          <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">{b.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-10">
                    <h3 className="text-5xl font-black italic uppercase tracking-tighter">Color Flow</h3>
                    <div className="space-y-8">
                      <div>
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3 ml-2">Primary Shell</label>
                        <input type="color" value={formData.primaryColor} onChange={(e) => setFormData({...formData, primaryColor: e.target.value})} className="w-full h-20 rounded-3xl cursor-pointer bg-white p-3 border-2 border-slate-100 shadow-inner" />
                      </div>
                      <div>
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3 ml-2">Accent Glow</label>
                        <input type="color" value={formData.secondaryColor} onChange={(e) => setFormData({...formData, secondaryColor: e.target.value})} className="w-full h-20 rounded-3xl cursor-pointer bg-white p-3 border-2 border-slate-100 shadow-inner" />
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-8">
                    <h3 className="text-5xl font-black italic uppercase tracking-tighter">Eye Style</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {eyeStyles.map(eye => (
                        <button key={eye} onClick={() => setFormData({...formData, eyeStyle: eye})} className={`p-8 rounded-3xl border-2 transition-all capitalize font-black tracking-widest ${formData.eyeStyle === eye ? 'border-slate-950 bg-white shadow-xl text-vivid-sky' : 'border-slate-200 bg-white/20 hover:border-slate-400'}`}>
                          {eye}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-8">
                    <h3 className="text-5xl font-black italic uppercase tracking-tighter">Identity</h3>
                    <input type="text" placeholder="Designate Name..." value={formData.cubeName} onChange={(e) => setFormData({...formData, cubeName: e.target.value.toUpperCase()})} className="w-full p-8 rounded-3xl border-2 border-slate-200 bg-white text-2xl font-black italic uppercase outline-none focus:border-vivid-sky transition-colors" />
                    <div className="flex gap-3">
                      {['Basic', 'Pro'].map(p => (
                        <button key={p} onClick={() => setFormData({...formData, plan: p})} className={`flex-1 p-6 rounded-2xl border-2 font-black text-[10px] tracking-[0.3em] uppercase transition-all ${formData.plan === p ? 'bg-slate-950 text-white border-slate-950 shadow-lg' : 'bg-white border-slate-200'}`}>
                          {p} PLAN
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-5xl font-black italic uppercase tracking-tighter">Finalize</h3>
                    <div className="space-y-4">
                      <input type="text" placeholder="Shipping Address" className="w-full p-6 rounded-2xl border-2 border-slate-200 bg-white outline-none" />
                      <div className="bg-slate-950 p-8 rounded-3xl text-white">
                        <p className="text-[10px] font-black tracking-[0.4em] opacity-50 uppercase mb-4">Summary</p>
                        <div className="flex justify-between font-black italic uppercase text-xl">
                          <span>Total</span>
                          <span>$199.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-12 flex justify-between items-center border-t border-slate-200/50 pt-8">
                <button onClick={prevStep} className={`font-black text-[10px] tracking-[0.3em] uppercase transition-all hover:text-vivid-sky ${step === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                  [ Back ]
                </button>
                <button onClick={nextStep} className="bg-slate-950 text-white px-12 py-5 rounded-2xl font-black text-xs tracking-[0.2em] uppercase hover:bg-vivid-sky hover:text-slate-950 transition-all shadow-2xl active:scale-95">
                  {step === 4 ? 'Initiate Build' : 'Continue →'}
                </button>
              </div>
            </>
          ) : (
            /* SIMPLIFIED SUCCESS MESSAGE */
            <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
               <div>
                  <h3 className="text-6xl font-black italic uppercase tracking-tighter text-slate-950 mb-4">
                    Build Active
                  </h3>
                  <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-sm leading-relaxed">
                    {formData.cubeName || 'Your unit'} is being built.
                  </p>
               </div>

               <button 
                  onClick={() => window.location.href = '/'} 
                  className="w-full max-w-sm bg-slate-950 text-white py-6 rounded-2xl font-black text-xs tracking-[0.3em] uppercase hover:bg-vivid-sky hover:text-slate-950 transition-all shadow-xl"
                >
                  Return to Home
                </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}