'use client'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export type SocialLink = {
  icon: React.ReactNode
  href: string
  label: string
}

interface SocialButtonsProps {
  links: SocialLink[]
  className?: string
  iconSize?: string
  spacing?: string
}

export function SocialButtons({
  links,
  className = '',
  iconSize = 'h-7 w-7',
  spacing = 'space-x-6',
}: SocialButtonsProps) {
  return (
    <TooltipProvider delayDuration={150}>
      <div className={`flex items-center ${spacing} ${className}`}>
        {links.map(link => (
          <Tooltip key={link.label}>
            <TooltipTrigger asChild>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex items-center justify-center rounded-full p-2 hover:bg-muted transition-colors"
              >
                <span className={iconSize}>{link.icon}</span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>{link.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
