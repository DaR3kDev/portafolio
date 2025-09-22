'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { getTranslations } from '@/lib/i18n/i18n'
import { Menu } from 'lucide-react'
import { ThemeToggle } from '../toggles/dark-mode'
import { LanguageToggle } from '../toggles/language-toggle'
import { scrollToSection } from '@/lib/utils/scroll'
import { LocaleProps } from '@/lib/i18n'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

const getNavItems = (t: ReturnType<typeof getTranslations>) => [
  { key: 'experience', label: t.nav.experience },
  { key: 'projects', label: t.nav.projects },
  { key: 'education', label: t.nav.education },
  { key: 'about', label: t.nav.about },
]

export function Navigation({ currentLocale, onLocaleChange }: LocaleProps) {
  const t = getTranslations(currentLocale)
  const [open, setOpen] = useState(false)
  const navItems = getNavItems(t)
  const [active, setActive] = useState<string>('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.6 },
    )

    navItems.forEach(item => {
      const section = document.getElementById(item.key)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [navItems])

  const linkClasses = (key: string) =>
    `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 
     ${active === key ? 'text-primary' : 'text-muted-foreground hover:text-primary'} 
     hover:bg-primary/5 group`

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Ir al inicio"
          onClick={e => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center space-x-3 group"
        >
          <div
            className="relative w-16 h-16 flex items-center justify-center
                   rounded-xl shadow-lg transition-transform duration-300
                   bg-gradient-to-br from-primary via-primary/80 to-primary/60
                   group-hover:scale-105"
          >
            <Image src="/img/logo.jpg" alt="Logo" fill className="rounded-xl object-contain" />

            {/* Overlay con efecto hover */}
            <div
              className="absolute inset-0 rounded-xl 
                     bg-gradient-to-br from-white/20 to-transparent 
                     opacity-0 group-hover:opacity-100 
                     transition-opacity duration-300"
            />
          </div>
        </Link>
        {/* Navegación Desktop */}
        <nav className="hidden lg:flex items-center space-x-3">
          {navItems.map(item => (
            <button
              key={item.key}
              onClick={() => scrollToSection(item.key)}
              className={linkClasses(item.key)}
            >
              {item.label}

              {/* Línea animada debajo */}
              <motion.span
                layoutId="underline"
                className="absolute bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-full"
                initial={false}
                animate={{
                  width: active === item.key ? '60%' : '0%',
                  x: '-50%',
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
            </button>
          ))}
        </nav>

        {/* Controles (Idioma, Tema, Menú Móvil) */}
        <div className="flex items-center space-x-2">
          {/* Idioma y tema (Desktop) */}
          <div className="hidden sm:flex items-center space-x-2">
            <LanguageToggle currentLocale={currentLocale} onLocaleChange={onLocaleChange} />
            <ThemeToggle />
          </div>

          {/* Menú móvil */}
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                aria-label="Abrir menú de navegación"
                className="lg:hidden hover:bg-primary/10 transition-all duration-200"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-56 p-4 space-y-4 bg-background/95 backdrop-blur-md shadow-lg rounded-xl">
              {/* Links del menú móvil */}
              <div className="flex flex-col space-y-2">
                {navItems.map(item => (
                  <button
                    key={item.key}
                    onClick={() => {
                      scrollToSection(item.key)
                      setOpen(false)
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Controles dentro del menú móvil */}
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
