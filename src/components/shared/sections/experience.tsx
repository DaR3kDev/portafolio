'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { getTranslations } from '@/lib/i18n/i18n'
import { LocaleProps } from '@/lib/i18n'
import { PageSection } from '../layout/page-section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase } from 'lucide-react'

export function Experience({ currentLocale }: LocaleProps) {
  const t = getTranslations(currentLocale)
  const timelineRef = useRef<HTMLDivElement>(null)

  // Animación de scroll para timeline
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start end', 'end start'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <PageSection id="experience" className="py-16 lg:py-32">
      {/*  Header  */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {t.experience.title}
        </h2>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          {t.experience.subtitle}
        </p>
      </div>

      {/*  Timeline  */}
      <div className="relative mt-16 flex flex-col items-center gap-12">
        {/* Línea vertical del timeline */}
        <div
          ref={timelineRef}
          className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gray-300 dark:bg-gray-700"
        />
        {/* Progreso animado del timeline */}
        <motion.div
          className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-1 bg-primary origin-top"
          style={{ scaleY }}
        />

        {/*  Job Cards  */}
        <div className="flex flex-col w-full max-w-4xl space-y-12 relative z-10">
          {t.experience.jobs.map((job, index) => {
            const isLeft = index % 2 === 0
            const rotation = isLeft ? '-rotate-1' : 'rotate-1'

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50, rotate: isLeft ? -1 : 1 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row md:items-start ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Punto pulsante del timeline */}
                <motion.div
                  className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-primary border-4 border-gray-200 dark:border-gray-700 z-10"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />

                {/*  Card  */}
                <Card
                  className={`w-full md:w-[48%] border border-gray-200 dark:border-gray-700 shadow-md dark:shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ${rotation} ${
                    isLeft ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      {/* Título y compañía */}
                      <div className="space-y-1.5">
                        <CardTitle className="flex items-center gap-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
                          <motion.div
                            className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-colors duration-300"
                            whileHover={{ rotate: 15, backgroundColor: '#E0F2FE' }}
                          >
                            <Briefcase className="h-5 w-5 text-primary" />
                          </motion.div>
                          {job.title}
                        </CardTitle>
                        <CardDescription className="text-base font-medium text-gray-600 dark:text-gray-400">
                          {job.company}
                        </CardDescription>
                      </div>

                      {/* Periodo */}
                      <Badge className="text-sm font-medium">{job.period ?? 'Sin fecha'}</Badge>
                    </div>
                  </CardHeader>

                  {/* Descripción */}
                  <CardContent>
                    <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                      {job.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </PageSection>
  )
}
