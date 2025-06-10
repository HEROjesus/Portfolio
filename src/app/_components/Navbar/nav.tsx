import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const Links = [
    { label: "Home", href: "#home" },
    { label: "Habilidades", href: "#skills" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
  ];

  const waveVariant = {
    animate: (i: number) => {
      const wave: number[] = [];
      for (let j = 0; j <= 10; j++) wave.push(j);
      for (let j = 9; j >= 0; j--) wave.push(j);

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

  const menuVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    exit: { y: -10, opacity: 0, transition: { duration: 0.2 } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo animado */}
      <div className="text-xl sm:text-2xl font-semibold text-blue-900 hover:text-blue-700 transition-all duration-500 cursor-pointer flex gap-0.5">
        {animatedWord.map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={waveVariant}
            initial={{ opacity: 0, x: 20 }}
            animate="animate"
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* Botão hamburguer */}
      <button
        className="lg:hidden flex items-center text-blue-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              isOpen
                ? "M6 18L18 6M6 6l12 12" // X
                : "M4 6h16M4 12h16M4 18h16" // 3 linhas
            }
          />
        </svg>
      </button>

      {/* Menu desktop */}
      <ul className="hidden lg:flex gap-6 items-center">
        {Links.map((link) => (
          <li key={link.href}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.2 },
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
        <a
          href="/Res/Rafael-de-Jesus-currículo.pdf"
          download="Rafael-de-Jesus-currículo.pdf"
          className="text-blue-900 px-4 py-2 flex items-center gap-2 hover:bg-blue-100 transition-all duration-500 hover:rounded-2xl"
          title="Baixar Currículo"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            className="w-6 h-6"
          >
            <Image
              src="/icons/document-validation-stroke-rounded.svg"
              alt="Ícone currículo"
              width={24}
              height={24}
            />
          </motion.span>
          Currículo
        </a>
      </ul>

      {/* Menu Mobile animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-15 left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col gap-4 z-40 lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.07,
                  },
                },
              }}
              className="flex flex-col gap-4"
            >
              {Links.map((link) => (
                <motion.li key={link.href} variants={listItemVariants}>
                  <a
                    href={link.href}
                    className="block text-blue-900 px-4 py-2 rounded hover:bg-blue-100 transition-colors"
                    onClick={() => setIsOpen(false)} // fecha o menu ao clicar
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              href="/Res/Rafael-de-Jesus-currículo.pdf"
              download="Rafael-de-Jesus-currículo.pdf"
              className="inline-flex items-center gap-2 text-blue-900 px-4 py-2 hover:bg-blue-100 hover:rounded-xl transition-all duration-300"
              title="Baixar Currículo"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <Image
                src="/icons/document-validation-stroke-rounded.svg"
                alt="Ícone currículo"
                width={24}
                height={24}
              />
              Currículo
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
