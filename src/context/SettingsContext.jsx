/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export const SettingsContext = createContext(null);

const DEFAULT_SETTINGS = {
  theme: "light",
  language: "en",
};

// Helper: read localStorage ONCE
function getInitialSettings() {
  try {
    const saved = localStorage.getItem("app-settings");
    if (!saved) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function SettingsProvider({ children }) {
  // ✅ Lazy initialization (THIS fixes the error)
  const [settings, setSettings] = useState(getInitialSettings);

  const { theme, language } = settings;

  // Save to localStorage when settings change
  useEffect(() => {
    localStorage.setItem("app-settings", JSON.stringify(settings));
  }, [settings]);

  const setTheme = (theme) =>
    setSettings((prev) => ({ ...prev, theme }));

  const setLanguage = (language) =>
    setSettings((prev) => ({ ...prev, language }));

  const resetSettings = () =>
    setSettings(DEFAULT_SETTINGS);

  return (
    <SettingsContext.Provider
      value={{
        theme,
        language,
        setTheme,
        setLanguage,
        resetSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
