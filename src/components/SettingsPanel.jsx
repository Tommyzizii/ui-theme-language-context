import { useSettings } from "../context/useSettings";

export default function SettingsPanel() {
  const { setTheme, setLanguage, resetSettings } = useSettings();

  return (
    <div style={{ border: "1px solid #ccc", padding: 10, margin: "10px 0" }}>
      <h3>Settings Panel</h3>

      <button onClick={() => setTheme("dark")}>Dark Theme</button>
      <button onClick={() => setTheme("light")}>Light Theme</button>

      <br /><br />

      <button onClick={() => setLanguage("en")}>English</button>
      <button onClick={() => setLanguage("th")}>Thai</button>

      <br /><br />

      <button onClick={resetSettings}>Reset</button>
    </div>
  );
}
