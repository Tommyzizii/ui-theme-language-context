import { useSettings } from "../context/useSettings";

function Header() {
  const { language } = useSettings();
  const translate = {
    en: "Welcome",
    th: "ยินดีต้อนรับ",
  };
  return <p>{translate[language]}</p>;
}

export default Header;
