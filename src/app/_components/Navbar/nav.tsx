import { motion } from "framer-motion";
import Image from "next/image";

export default function Nav() {
  const Links = [
    { label: "Home", href: "#home" },
    { label: "Habilidades", href: "#skills" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
  ];

  const waveVariant = {
    animate: (i: number) => {
      const wave: number[] = [];

      // Vai de 0 até 10
      for (let j = 0; j <= 10; j++) {
        wave.push(j);
      }

      // Volta de 9 até 0 (evita duplicar o pico)
      for (let j = 9; j >= 0; j--) {
        wave.push(j);
      }

      return {
        y: wave.map((v) => -v / 2),
        opacity: 0.9,
        x: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          delay: i * 0.1,
        },
      };
    },
  };

  const animatedWord = " Rafael Jesus".split("");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-around items-center p-6 bg-white shadow-md">
      <div className="text-2xl font-semibold text-blue-900 hover:text-blue-700 transition-all duration-500 cursor-pointer flex gap-1">
        {animatedWord.map((char, i) => (
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            key={i}
            custom={i}
            variants={waveVariant}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            animate="animate"
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>

      <ul className="flex gap-4 items-center">
        {Links.map((link) => (
          <li key={link.href}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 5, y: 0 }}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: {
                  duration: 0.2,
                  repeatType: "mirror",
                },
              }}
              transition={{ duration: 0.3 }}
            >
              <a
                href={link.href}
                className="text-blue-900 px-4 py-2 rounded hover:bg-blue-100 transition-colors"
              >
                {link.label}
              </a>
            </motion.div>
          </li>
        ))}
      </ul>

      <a
        href="/Res/Rafael-de-Jesus-currículo.pdf"
        download="Rafael-de-Jesus-currículo.pdf"
        className="text-shadow-blue-900 px-4 py-2 flex items-center gap-2  hover:bg-blue-100 transition-all duration-500 cursor-pointer
         hover:text-blue-700 hover:rounded-2xl"
        title="Baixar Currículo"
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          className="inline-flex items-center justify-center w-6 h-6"
        >
          <Image
            src="/icons/document-validation-stroke-rounded.svg"
            alt="papaer icon"
            width={24}
            height={24}
          />
        </motion.span>
        Currículo
      </a>
    </nav>
  );
}
