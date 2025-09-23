'use client'

import { Diploma } from '@/components/features/education/interfaces/education-interfaces'
import { ModalEducation } from '@/components/features/education/modal/modal-educations'
import { ReviewCard } from '@/components/features/education/review-card'
import { Marquee } from '@/components/magicui/marquee'
import { useModal } from '@/hooks/use-modal'
import { LocaleProps } from '@/lib/i18n'
import { getTranslations } from '@/lib/i18n/i18n'
import { PageSection } from '../layout/page-section'
import { motion } from 'framer-motion'
import { chunkArray } from '@/lib/utils/array'

export function EducationSection({ currentLocale }: LocaleProps) {
  const t = getTranslations(currentLocale)
  const { isOpen, data, open, close } = useModal<Diploma>()

  // 🔹 Eliminar duplicados por título
  const uniqueDegrees = t.education.degrees.filter(
    (d: Diploma, index: number, self: Diploma[]) =>
      index === self.findIndex(d2 => d2.title === d.title),
  )

  // 🔹 Dividir dinámicamente diplomas
  const groups = chunkArray(uniqueDegrees, 4)

  // 🔹 Función para abrir modal
  const handleOpen = (diploma: Diploma, index: number) => {
    open({
      id: diploma.id ?? index + 1,
      title: diploma.title,
      institution: diploma.institution,
      type: diploma.type,
      year: diploma.year,
      image: diploma.image,
      description: diploma.description,
      skills: diploma.skills || [],
      downloadUrl: diploma.downloadUrl || '#',
    })
  }

  return (
    <PageSection id="education" className="py-24 relative overflow-hidden">
      {/* ----- Header ----- */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-20 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black dark:text-white">
          {t.education.title}
        </h2>
        <p className="mt-4 text-lg text-black/70 dark:text-white/70">{t.education.subtitle}</p>
      </motion.div>

      {/* ----- Carruseles dinámicos ----- */}
      <div className="relative flex flex-col items-center justify-center gap-20">
        {groups.map((group, rowIndex) => (
          <Marquee
            key={rowIndex}
            pauseOnHover
            className="[--duration:25s] gap-10"
            reverse={rowIndex % 2 === 1}
          >
            {group.map((diploma, index) => (
              <motion.div
                key={diploma.id ?? diploma.title}
                whileHover={{ scale: 1.05, y: -6 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                onClick={() => handleOpen(diploma, rowIndex * group.length + index)}
                className="cursor-pointer bg-white dark:bg-black rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
              >
                <ReviewCard img={diploma.image} title={diploma.title} />
              </motion.div>
            ))}
          </Marquee>
        ))}
      </div>

      {/* ----- Modal con info del diploma ----- */}
      <ModalEducation
        isOpen={isOpen}
        onClose={close}
        selectedDiploma={data!}
        currentLocale={currentLocale}
        onDownload={diploma => window.open(diploma.downloadUrl, '_blank')}
      />
    </PageSection>
  )
}
