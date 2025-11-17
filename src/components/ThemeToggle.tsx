import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-2 p-1 rounded-lg bg-slate-100 dark:bg-zinc-900">
      {[
        { value: 'light', icon: Sun },
        { value: 'dark', icon: Moon },
        { value: 'system', icon: Monitor }
      ].map(({ value, icon: Icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value as 'light' | 'dark' | 'system')}
          className={`p-2 rounded-md transition-all duration-200 ${
            theme === value
              ? 'bg-white dark:bg-zinc-800 shadow-sm text-blue-500 dark:text-blue-400'
              : 'text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-zinc-800/50'
          }`}
          aria-label={`Switch to ${value} theme`}
        >
          <Icon size={18} />
        </button>
      ))}
    </div>
  )
}

export default ThemeToggle
