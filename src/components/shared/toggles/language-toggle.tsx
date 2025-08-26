'use client'

import { Button } from '@/components/ui/button'
import { Locale, locales } from '@/lib/i18n/i18n'
import { Globe } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface LanguageToggleProps {
  currentLocale: Locale
  onLocaleChange: (locale: Locale) => void
}

export function LanguageToggle({ currentLocale, onLocaleChange }: LanguageToggleProps) {
  const languageOptions = {
    es: { label: 'Español', flag: '🇪🇸' },
    en: { label: 'English', flag: '🇺🇸' },
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <Globe className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map(locale => (
          <DropdownMenuItem
            key={locale}
            onClick={() => onLocaleChange(locale)}
            className={`
              flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md
              hover:bg-primary/10 hover:text-primary transition-colors
              ${currentLocale === locale ? 'bg-primary/20 text-primary font-semibold' : ''}
            `}
          >
            <span>{languageOptions[locale].flag}</span>
            <span>{languageOptions[locale].label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
