import Techs from './_skills/_map';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <section
      aria-label="Skills Section"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4"
    >
      <h1 className="text-4xl font-bold mb-4">My Skills</h1>
      <p className="text-lg text-gray-700">Here are some of my skills:</p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-6 lg:gap-y-12 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center max-w-6xl">
        {Techs.map((tech, index) => {
          const Icon = tech.image; // Aqui pegamos o componente

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border-2 hover:bg-slate-900 hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
            >
              <Icon size={32} />
              <span className="text-sm">{tech.name}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
