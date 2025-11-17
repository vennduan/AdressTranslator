import { useLanguage } from '../contexts/LanguageContext';

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex bg-white/70 dark:bg-zinc-900/70 rounded-lg p-1 border border-slate-200/50 dark:border-zinc-800/50">
      <button
        onClick={() => setLanguage('zh')}
        className={`px-3 py-1 text-sm rounded-md transition-colors ${
          language === 'zh'
            ? 'bg-blue-600 text-white'
            : 'text-slate-600 dark:text-slate-300 hover:text-blue-600'
        }`}
      >
        中文
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-sm rounded-md transition-colors ${
          language === 'en'
            ? 'bg-blue-600 text-white'
            : 'text-slate-600 dark:text-slate-300 hover:text-blue-600'
        }`}
      >
        English
      </button>
    </div>
  );
}

export default LanguageSwitcher;
