'use client'

import { Diploma } from '@/components/features/education/interfaces/education-interfaces'
import { ModalEducation } from '@/components/features/education/modal/modal-educations'
import { ReviewCard } from '@/components/features/education/review-card'
import { Marquee } from '@/components/magicui/marquee'
import { useModal } from '@/hooks/use-modal'
import { LocaleProps } from '@/lib/i18n'
import { getTranslations } from '@/lib/i18n/i18n'
import { PageSection } from '../layout/page-section'

export function EducationSection({ currentLocale }: LocaleProps) {
  const t = getTranslations(currentLocale)
  const { isOpen, data, open, close } = useModal<Diploma>()

  // Dividir los diplomas en dos filas para los carruseles
  const half = Math.ceil(t.education.degrees.length / 2)
  const firstRow = t.education.degrees.slice(0, half)

  // Convertir diploma a tipo Diploma para abrir el modal
  const handleOpen = (diploma: (typeof t.education.degrees)[0], index: number) => {
    open({
      id: index + 1,
      title: diploma.degree,
      institution: diploma.school,
      type: diploma.type,
      year: diploma.year,
      image: diploma.image,
      description: diploma.description,
      skills: diploma.skills || [],
      downloadUrl: diploma.downloadUrl || '#',
    })
  }

  return (
    <PageSection id="education" className="py-20 relative overflow-hidden">
      {/* ----- Título ----- */}
      <div className="max-w-3xl mx-auto text-center mb-12 px-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {t.education.title}
        </h2>
        <p className="mt-4 text-lg text-gray-600">{t.education.subtitle}</p>
      </div>

      {/* ----- Carruseles de diplomas ----- */}
      <div className="relative flex flex-col items-center justify-center gap-8">
        <Marquee pauseOnHover className="[--duration:25s] gap-6">
          {firstRow.map((diploma, index) => (
            <div key={diploma.degree} onClick={() => handleOpen(diploma, index)}>
              <ReviewCard img={diploma.image} />
            </div>
          ))}
        </Marquee>
      </div>

      {/* ----- Modal de diploma ----- */}
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
