import { translations } from '../i18n/translations';

interface TranslationBoxProps {
  value: string;
  onChange: (value: string) => void;
  onTranslate?: () => void;
  placeholder?: string;
  label: string;
  readOnly?: boolean;
  loading?: boolean;
  language?: 'zh' | 'en';
}

function TranslationBox({
  value,
  onChange,
  onTranslate,
  placeholder,
  label,
  readOnly,
  loading,
  language = 'zh'
}: TranslationBoxProps) {
  const t = translations[language];

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</label>
        {!readOnly && value && (
          <button
            onClick={onTranslate}
            className="px-4 py-1.5 text-sm bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 text-white rounded-full hover:opacity-90 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            {t.translation.translate}
          </button>
        )}
      </div>
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          readOnly={readOnly}
          rows={4}
          className={`w-full p-4 rounded-lg border ${
            readOnly 
              ? 'bg-slate-50 dark:bg-zinc-900 border-slate-200 dark:border-zinc-800' 
              : 'border-slate-300 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-zinc-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-zinc-900'
          } outline-none transition-all duration-200 resize-none text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500`}
        />
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-zinc-900/50 rounded-lg">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TranslationBox
