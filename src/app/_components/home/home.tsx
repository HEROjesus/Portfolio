"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <section
      className="
        flex flex-col items-center justify-center min-h-dvh p-6 space-y-8
        bg-gradient-to-b from-[#f0f4ff] to-[#e0e7ff] text-center
        md:flex-row md:justify-between md:space-x-8 md:space-y-0
        md:p-12 md:bg-white"
    >
      <div className="max-w-xl space-y-6 ">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-[#344374]"
        >
          Olá, eu sou Rafael
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl text-[#242b47]"
        >
          Desenvolvedor Front-End
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-lg"
        >
          Criando interfaces modernas e experiências digitais impactantes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex space-x-4 flex-wrap justify-center md:justify-center"
        >
          <Button variant="default">Ver Projetos</Button>
          <Button variant="outline">Contato</Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="hidden md:block"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 3, type: "spring", stiffness: 100 }}
      >
        <Image
          src="/Rafael_Hero.png"
          alt="Hero image"
          width={500}
          height={500}
          className="w-48  h-48 flex justify-items-center rounded-2xl md:none"
        />
      </motion.div>
    </section>
  );
}
