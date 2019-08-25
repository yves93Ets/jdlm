import React, { useState, ChangeEvent, useContext } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import { LocalizedContext } from "Common/hooks/localization/localizedContext";

export const LanguageSelect = () => {
  const [language, setlanguages] = useState("");

  const handleChange = (event: ChangeEvent<{ value: string }>) => {
    setlanguages(event.target.value);
    console.log(localized);
    localized.setLanguage(language);
    console.log(localized);
  };

  const localized = useContext(LocalizedContext);

  return (
    <FormControl style={languageStyle}>
      <InputLabel shrink>{localized.language}</InputLabel>
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
