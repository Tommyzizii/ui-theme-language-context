import { useSettings } from "../context/useSettings";

const PreviewCard = () => {
  const { theme, language } = useSettings();
  const translate = {
    en: "This is your preference preview.",
    th: "นี่คือหน้าตัวอย่างการตั้งค่า",
  };

  return (
    <div>
      <p>{translate[language]}</p>
      <p>Current Theme: {theme}</p>
      <p>Current Language: {language}</p>
    </div>
  );
};

export default PreviewCard;
