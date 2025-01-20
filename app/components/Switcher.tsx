import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const languages = [
  { name: "English", level: "Fluent", flag: "🇬🇧" },
  { name: "Arabic", level: "Native", flag: "🇫🇷" },
];

const Switcher = () => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentCard = cardRefs.current[currentLanguageIndex];
      const nextIndex =
        currentLanguageIndex === languages.length - 1 ? 0 : currentLanguageIndex + 1;
      const nextCard = cardRefs.current[nextIndex];

      // GSAP animation for switching cards
      gsap.timeline()
        .to(currentCard, {
          y: -30,
          opacity: 50,
          duration: 0.6,
          ease: "power2.out",
        })
        .set(currentCard, { zIndex: 0 }) // Send current card to the back
        .set(nextCard, { zIndex: 1 }) // Bring next card to the front
        .fromTo(
          nextCard,
          { y: 30, opacity: 50 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          }
        );

      setCurrentLanguageIndex(nextIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentLanguageIndex]);

  return (
    <div className="relative w-full h-32 flex items-center justify-center">
      {languages.map((language, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el!)}
          className={`absolute w-full max-w-sm bg-white flex items-center gap-4 p-4 rounded-xl border border-gray-200 shadow-md`}
          style={{
            zIndex: index === 0 ? 1 : 0, // First card starts on top
            opacity: index === 0 ? 1 : 0, // First card visible, others hidden
          }}
        >
          <span className="text-2xl">{language.flag}</span>
          <div>
            <p className="text-lg font-medium">{language.name}</p>
            <p className="text-sm text-gray-500">{language.level}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Switcher;
