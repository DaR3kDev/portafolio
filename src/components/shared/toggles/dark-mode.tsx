'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'

    if (document.startViewTransition) {
      document.startViewTransition(() => setTheme(nextTheme))
    } else {
      setTheme(nextTheme)
    }
  }

  return (
    <Button variant="ghost" size="sm" onClick={toggleTheme} className="relative">
      <Sun className="h-4 w-4 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
