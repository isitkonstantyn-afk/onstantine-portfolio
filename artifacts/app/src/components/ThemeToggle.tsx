import React, { useEffect, useState } from 'react'
import { Palette, Check } from 'lucide-react'

export const COLOR_THEMES = [
  { id: 'obsidian', label: 'Obsidian', color: '#6366f1', bg: '#050505' },
  { id: 'champagne', label: 'Champagne Gold', color: '#eab308', bg: '#080806' },
  { id: 'royal', label: 'Royal Purple', color: '#a855f7', bg: '#08050e' },
  { id: 'blue', label: 'Light Blue', color: '#38bdf8', bg: '#060910' },
  { id: 'pink', label: 'Light Pink', color: '#f472b6', bg: '#0d070a' },
]

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('elysium_color_theme') || 'obsidian'
    } catch {
      return 'obsidian'
    }
  })
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-color-theme', theme)
    try {
      localStorage.setItem('elysium_color_theme', theme)
    } catch {
      // ignore
    }
  }, [theme])

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-white/10 transition-colors flex items-center justify-center border border-white/10"
        title="Select color palette"
      >
        <Palette size={17} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 mt-2 w-48 rounded-2xl glass-strong border border-white/15 p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
            <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-2.5 py-1.5 border-b border-white/10 mb-1">
              Color Theme
            </div>
            {COLOR_THEMES.map(t => {
              const active = theme === t.id
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setTheme(t.id)
                    setOpen(false)
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition-colors ${
                    active ? 'bg-white/15 text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3 h-3 rounded-full border border-white/20 shadow-sm"
                      style={{ background: t.color }}
                    />
                    <span>{t.label}</span>
                  </div>
                  {active && <Check size={13} className="text-foreground" />}
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
