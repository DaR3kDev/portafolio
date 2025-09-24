'use client'

import { motion } from 'framer-motion'
import { SocialButtons, SocialLink } from '@/components/shared/buttons/social-button'
import { Button } from '@/components/ui/button'
import { getTranslations } from '@/lib/i18n/i18n'
import { Download } from 'lucide-react'

export function HeroText({
  t,
  socialLinks,
}: {
  t: ReturnType<typeof getTranslations>
  socialLinks: SocialLink[]
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      className="flex flex-col items-center md:items-start text-center md:text-left gap-8 md:gap-12"
    >
      {/* Título */}
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="font-extrabold leading-tight text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight"
      >
        {t.hero.greeting}
        <span className="block bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          {t.hero.role}
        </span>
      </motion.h1>

      {/* Descripción */}
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl"
      >
        {t.hero.description}
      </motion.p>

      {/* Botones y redes */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex flex-col sm:flex-row sm:items-center sm:gap-10 gap-6 w-full md:w-auto"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="lg"
            className="flex items-center justify-center text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto"
          >
            <Download className="mr-2 h-5 w-5" />
            {t.hero.downloadCV}
          </Button>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SocialButtons links={socialLinks.slice(0, 2)} spacing="space-x-4" />
          <span className="text-muted-foreground opacity-50 hidden sm:inline">|</span>
          <SocialButtons links={socialLinks.slice(2)} spacing="space-x-4 sm:space-x-8" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
