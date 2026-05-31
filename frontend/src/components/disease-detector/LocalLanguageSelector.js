import { languages } from "../../utils/languageMap.js";

export default function LocalLanguageSelector() {
  return (
    <div className="field">
      <label>Language</label>
      <select name="language" defaultValue="hi">
        {languages.map((language) => <option key={language.code} value={language.code}>{language.label}</option>)}
      </select>
    </div>
  );
}
