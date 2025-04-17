import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Howl } from "howler";

const escenas = [
  {
    id: "intro",
    titulo: "Estás en Yaracuy",
    texto: "No lo ves, pero lo sientes. Un canto antiguo de mujeres afro resuena desde las montañas de Veroes… La tierra vibra, la historia respira.",
    audio: "/sounds/intro.mp3"
  },
  {
    id: "cerro",
    titulo: "Cerro María Lionza",
    texto: "Rutas de espiritualidad. Cantos, agua, monte y fe. El susurro del río lleva ofrendas. La montaña escucha.",
    audio: "/sounds/cerro.mp3"
  },
  {
    id: "marroquina",
    titulo: "La Marroquina",
    texto: "Cacao, molienda, fermentación, muralismo y arte ritual. Aquí el color se huele, se toca, se escucha.",
    audio: "/sounds/marroquina.mp3"
  },
  {
    id: "sanfelipe",
    titulo: "San Felipe e Independencia",
    texto: "Ecos patrimoniales. Arquitectura que habla. Campanas y pasos sobre piedra. Ruidos que cuentan.",
    audio: "/sounds/sanfelipe.mp3"
  },
  {
    id: "guayabito",
    titulo: "Guayabito",
    texto: "Río, juegos, risas, memoria compartida. La naturaleza canta, el agua guarda secretos.",
    audio: "/sounds/guayabito.mp3"
  }
];

const YaracuyExperienceDemo = () => {
  const [index, setIndex] = useState(0);
  const [subtitulo, setSubtitulo] = useState("");

  const playAudio = (src, texto) => {
    const sound = new Howl({ src: [src], html5: true });
    sound.play();
    setSubtitulo(texto);
  };

  const siguiente = () => {
    if (index < escenas.length - 1) {
      setIndex(index + 1);
      playAudio(escenas[index + 1].audio, escenas[index + 1].texto);
    }
  };

  const anterior = () => {
    if (index > 0) {
      setIndex(index - 1);
      playAudio(escenas[index - 1].audio, escenas[index - 1].texto);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-black text-white p-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={escenas[index].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{escenas[index].titulo}</h1>
          <p className="text-lg italic mb-4" aria-live="polite">{subtitulo || escenas[index].texto}</p>
          <div className="flex gap-4 justify-center mt-8">
            <button onClick={anterior} disabled={index === 0} className="bg-white text-black px-4 py-2 rounded-xl disabled:opacity-30">Anterior</button>
            <button onClick={siguiente} disabled={index === escenas.length - 1} className="bg-white text-black px-4 py-2 rounded-xl disabled:opacity-30">Siguiente</button>
          </div>
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default YaracuyExperienceDemo;