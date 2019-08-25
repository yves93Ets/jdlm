import React, { useState, ChangeEvent } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import { useTranslation } from "react-i18next";

export const LanguageSelect = () => {
  const { t, i18n } = useTranslation();
  const [language, setlanguages] = useState("en");

  const handleChange = (event: ChangeEvent<{ value: string }>) => {
    setlanguages(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <FormControl style={languageStyle}>
      <InputLabel shrink>{t("language")}</InputLabel>
      <Select value={language} onChange={handleChange}>
        <MenuItem value="en">en</MenuItem>
        <MenuItem value="es">es</MenuItem>
        <MenuItem value="fr">fr</MenuItem>
      </Select>
    </FormControl>
  );
};

const languageStyle: React.CSSProperties = {
  position: "absolute",
  top: "0",
  right: "0",
  margin: "10px"
};
