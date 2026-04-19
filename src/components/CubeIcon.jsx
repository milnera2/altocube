import { motion } from 'framer-motion';

export default function CubeIcon({ 
  size = "w-24 h-24", 
  primary = "#FE706A", 
  secondary = "#00CCFF", 
  eyeStyle = "neutral" 
}) {
  
  const getEyeVariants = () => {
    switch (eyeStyle) {
      case 'happy':
        return { borderRadius: "50% 50% 0 0", height: "20px", width: "25px", rotate: 0 };
      case 'angry':
        return { clipPath: "polygon(0% 20%, 100% 0%, 100% 100%, 0% 100%)", height: "35px", width: "25px", rotate: 0 };
      case 'dead':
        return { borderRadius: "0px", rotate: 45, width: "30px", height: "6px" };
      case 'cyclops':
        return { width: "50px", height: "50px", borderRadius: "9999px", rotate: 0 };
      case 'detective':
        return { borderRadius: "4px", height: "12px", width: "45px", rotate: 0 };
      default:
        return { borderRadius: "9999px", height: "40px", width: "20px", rotate: 0, clipPath: "none" };
    }
  };

  const eyeVariant = getEyeVariants();

  return (
    <div 
      className={`${size} bg-zinc-950 border-[8px] rounded-[3rem] flex items-center justify-center relative shadow-2xl transition-colors duration-500`}
      style={{ borderColor: primary }} 
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-[2.5rem]" />
      
      <div className="flex space-x-5 z-10 items-center justify-center">
        {(eyeStyle === 'cyclops' ? [0] : [0, 0.15]).map((delay) => (
          <motion.div 
            key={delay}
            animate={{ 
              scaleY: eyeStyle === 'dead' ? 1 : [1, 1, 0.1, 1, 1], 
              ...eyeVariant
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4, 
              times: [0, 0.8, 0.85, 0.9, 1],
              delay,
              borderRadius: { duration: 0 },
              height: { duration: 0 },
              width: { duration: 0 },
              clipPath: { duration: 0 },
              rotate: { duration: 0 }
            }}
            style={{ 
              backgroundColor: secondary,
              boxShadow: `0 0 30px ${secondary}` 
            }}
          />
        ))}
      </div>

    </div>
  );
}