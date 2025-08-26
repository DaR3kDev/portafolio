'use client'

import { ReactNode } from 'react'

interface PageSectionProps {
  id: string
  children: ReactNode
  className?: string
}

export function PageSection({ id, children, className = '' }: PageSectionProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  )
}
