'use client'

import { ModalProps } from './interfaces/modal-education.interfaces'
import { X, GraduationCap, Download, FileText } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export function ModalEducation({ isOpen, onClose, selectedDiploma, currentLocale }: ModalProps) {
  const hasSkills = selectedDiploma?.skills && selectedDiploma.skills.length > 0

  const fadeInUp = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  }

  return (
    <AnimatePresence>
      {isOpen && selectedDiploma && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-lg"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto rounded-3xl bg-white dark:bg-neutral-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-200/30 dark:border-neutral-700 p-8"
          >
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gray-100/80 dark:bg-gray-800/80 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
              <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Columna izquierda: Imagen + descarga */}
              <motion.div {...fadeInUp} className="flex flex-col gap-6">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-gray-300 dark:border-neutral-700 group hover:shadow-2xl transition">
                  {selectedDiploma.image ? (
                    <Image
                      src={selectedDiploma.image}
                      alt={selectedDiploma.title}
                      fill
                      className="object-contain bg-white dark:bg-neutral-900 transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-gray-400 text-sm">
                      {currentLocale === 'es' ? 'Imagen no disponible' : 'No image available'}
                    </div>
                  )}
                </div>

                <a
                  href={selectedDiploma.downloadUrl}
                  download
                  className="flex items-center justify-center gap-3 py-4 rounded-3xl shadow-md hover:shadow-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold transition-transform hover:scale-105 hover:animate-pulse"
                >
                  <Download className="h-5 w-5" />
                  {currentLocale === 'es' ? 'Descargar Diploma' : 'Download Diploma'}
                </a>
              </motion.div>

              {/* Columna derecha: Información */}
              <motion.div {...fadeInUp} className="flex flex-col gap-6">
                {/* Header */}
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-md">
                    <GraduationCap className="h-8 w-8 text-gray-700 dark:text-gray-300" />
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-snug">
                      {selectedDiploma.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium mt-1">
                      {selectedDiploma.institution}
                    </p>

                    <div className="flex items-center gap-3 mt-4 flex-wrap">
                      <Badge className="px-4 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-105 transition-transform">
                        {selectedDiploma.type}
                      </Badge>
                      <Badge className="px-4 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-105 transition-transform">
                        {selectedDiploma.year}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Descripción */}
                <motion.p
                  {...fadeInUp}
                  className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed"
                >
                  {selectedDiploma.description}
                </motion.p>

                {/* Habilidades */}
                {hasSkills && (
                  <motion.div {...fadeInUp}>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      {currentLocale === 'es' ? 'Habilidades Adquiridas' : 'Skills Acquired'}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedDiploma.skills?.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 hover:scale-110 transition-transform"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Footer */}
                <motion.div
                  {...fadeInUp}
                  className="pt-6 mt-auto border-t border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <FileText className="h-4 w-4" />
                    {currentLocale === 'es'
                      ? 'Documento verificado y autenticado'
                      : 'Verified and authenticated document'}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
