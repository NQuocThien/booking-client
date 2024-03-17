"use client";
import React, { useState } from "react";
import Flag from "react-world-flags";
import { Dropdown } from "react-bootstrap";
import { languages } from "@/assets/contains/emun";
import { Language } from "@/assets/contains/item-interface";
interface IProps {
  currentLanguage: Language;
  handleSetLanguage: (language: Language) => void;
}
const LanguageSelector: React.FC<IProps> = ({
  currentLanguage,
  handleSetLanguage,
}) => {
  const [selectedLanguage, setSelectedLanguage] =
    useState<Language>(currentLanguage);

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    handleSetLanguage(language);
    // Perform other actions when a language is selected
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="transparent" id="language-dropdown">
        {selectedLanguage ? (
          <span className="selector-laguage">
            <Flag code={selectedLanguage.code} height="20" />{" "}
            {selectedLanguage.name}
          </span>
        ) : (
          "Select Language"
        )}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {languages.map((language) => (
          <Dropdown.Item
            key={language.code}
            onClick={() => handleLanguageChange(language)}>
            <Flag code={language.code} height="20" />
            <span className="selector-laguage">{language.name}</span>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelector;
