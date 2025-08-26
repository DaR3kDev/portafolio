'use client'

import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { getTranslations } from '@/lib/i18n/i18n'
import { Code, Github, Linkedin, Menu } from 'lucide-react'
import { useState } from 'react'
import { ThemeToggle } from '../toggles/dark-mode'
import { LanguageToggle } from '../toggles/language-toggle'
import { SocialButtons, SocialLink } from '../buttons/social-button'
import { scrollToSection } from '@/lib/utils/scroll'
import { LocaleProps } from '@/lib/i18n'

export function Navigation({ currentLocale, onLocaleChange }: LocaleProps) {
  const t = getTranslations(currentLocale)
  const [open, setOpen] = useState(false)

  const navItems = [
    { key: 'about', label: t.nav.about },
    { key: 'experience', label: t.nav.experience },
    { key: 'projects', label: t.nav.projects },
    { key: 'skills', label: t.nav.skills },
    { key: 'testimonials', label: t.nav.testimonials },
    { key: 'contact', label: t.nav.contact },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          onClick={e => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center space-x-3 group"
        >
          <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
            <Code className="h-6 w-6 text-primary-foreground" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-bold text-2xl bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              Portfolio
            </span>
            <span className="text-xs text-muted-foreground font-medium">Developer</span>
          </div>
        </a>

        {/* Navegación Desktop */}
        <nav className="hidden lg:flex items-center space-x-3">
          {navItems.map(item => (
            <button
              key={item.key}
              onClick={() => scrollToSection(item.key)}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-200 group"
            >
              {item.label}
              <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 group-hover:w-3/4 transform -translate-x-1/2 transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* Controles */}
        <div className="flex items-center space-x-2">
          {/* Idioma y tema */}
          <div className="hidden sm:flex items-center space-x-2">
            <LanguageToggle currentLocale={currentLocale} onLocaleChange={onLocaleChange} />
            <ThemeToggle />
          </div>

          {/* Menú móvil con Popover */}
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden hover:bg-primary/10 transition-all duration-200"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-4 space-y-4">
              <div className="flex flex-col space-y-2">
                {navItems.map(item => (
                  <button
                    key={item.key}
                    onClick={() => {
                      scrollToSection(item.key)
                      setOpen(false)
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="pt-3 border-t flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <LanguageToggle currentLocale={currentLocale} onLocaleChange={onLocaleChange} />
                  <ThemeToggle />
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  )
}
