"use client";

import React, { useState } from "react";
import Eng from "./components/eng";
import Kor from "./components/kor";

type Language = "kor" | "eng";

const Home: React.FC = () => {
  const [language, setLanguage] = useState<Language | null>(null); // Initially no language is selected

  const handleLanguageChange = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
  };

  return (
    <main className="p-2 text-black text-sm h-screen flex items-center justify-center">
      {language === "kor" ? <Kor /> : language === "eng" ? <Eng /> : (
        <div>
          <h1 className="text-center mb-2 text-white">Choose a language      /      언어를 선택하세요</h1>
          <div className="flex justify-around">
            <button className="transform transition-transform hover:scale-110 hover:underline text-white" onClick={() => handleLanguageChange("eng")}>English</button>
            <button className="transform transition-transform hover:scale-110 hover:underline text-white" onClick={() => handleLanguageChange("kor")}>한국어</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Home;