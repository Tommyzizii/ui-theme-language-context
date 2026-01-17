import { useSettings } from "./context/useSettings";
import Header from "./components/Header";
import PreviewCard from "./components/PreviewCard";
import SettingsPanel from "./components/SettingsPanel";
import "./App.css";

function App() {
  const { theme } = useSettings();

  return (
    <div className={`app ${theme}`}>
      <Header />
      <PreviewCard />
      <SettingsPanel />
    </div>
  );
}

export default App;
