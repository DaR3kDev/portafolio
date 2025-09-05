import { useRef } from 'react'
import { getTranslations } from '@/lib/i18n/i18n'
import { LocaleProps } from '@/lib/i18n'
import { PageSection } from '../layout/page-section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card'
import { Briefcase } from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

export function Experience({ currentLocale }: LocaleProps) {
  const t = getTranslations(currentLocale)
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start end', 'end start'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <PageSection id="experience" className="py-16 lg:py-32">
      {/* Encabezado */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          {t.experience.title}
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">{t.experience.subtitle}</p>
      </div>

      {/* Timeline */}
      <div className="relative mt-16 flex flex-col items-center gap-12">
        {/* Línea central con progreso */}
        <div
          className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gray-300"
          ref={timelineRef}
        />
        <motion.div
          className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-1 bg-primary origin-top"
          style={{ scaleY }}
        />

        {/* Jobs */}
        <div className="flex flex-col w-full max-w-4xl space-y-12 relative z-10">
          {t.experience.jobs.map((exp, index) => {
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
                {/* Punto pulsante en timeline */}
                <motion.div
                  className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-primary border-4 border-muted z-10"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />

                {/* Card con hover y efecto lift */}
                <Card
                  className={`w-full md:w-[48%] border border-border shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ${rotation} ${
                    isLeft ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      {/* Título + Empresa */}
                      <div className="space-y-1.5">
                        <CardTitle className="flex items-center gap-3 text-xl font-semibold">
                          <motion.div
                            className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center transition-colors duration-300"
                            whileHover={{ rotate: 15, backgroundColor: '#E0F2FE' }}
                          >
                            <Briefcase className="h-5 w-5 text-primary" />
                          </motion.div>
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-base font-medium text-muted-foreground">
                          {exp.company}
                        </CardDescription>
                      </div>

                      {/* Periodo destacado */}
                      <Badge className="text-sm font-medium ">{exp.period ?? 'Sin fecha'}</Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="leading-relaxed text-muted-foreground">{exp.description}</p>
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
