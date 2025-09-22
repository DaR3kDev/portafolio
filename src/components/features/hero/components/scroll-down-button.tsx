import { ChevronDown } from 'lucide-react'
import { scrollToSection } from '@/lib/utils/scroll'

export function ScrollDownButton() {
  return (
    <button
      onClick={() => scrollToSection('projects')}
      className="absolute left-1/2 -translate-x-1/2 cursor-pointer rounded-full p-3 bg-background/60 shadow-md hover:bg-background transition animate-bounce bottom-16 sm:bottom-12 md:bottom-12"
      aria-label="Scroll down"
    >
      <ChevronDown className="h-6 w-6 text-primary" />
    </button>
  )
}
