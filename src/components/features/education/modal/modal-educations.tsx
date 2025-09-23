'use client'

import { ModalProps } from './interfaces/modal-education.interfaces'
import { X, GraduationCap, Download, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export function ModalEducation({
  isOpen,
  onClose,
  selectedDiploma,
  currentLocale,
  onDownload,
}: ModalProps) {
  const hasSkills = selectedDiploma?.skills && selectedDiploma.skills.length > 0

  return (
    <AnimatePresence>
      {isOpen && selectedDiploma && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-950 shadow-2xl border border-gray-200/40 dark:border-neutral-800"
          >
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md rounded-full flex items-center justify-center shadow hover:scale-105 transition"
            >
              <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Contenido */}
            <div className="grid md:grid-cols-2 gap-10 p-8">
              {/* Columna izquierda: Imagen + descarga */}
              <div className="space-y-6">
                {/* Imagen destacada */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-300 dark:border-neutral-700 group">
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

                  {/* Glow decorativo */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/20 dark:ring-black/30 pointer-events-none" />
                </div>

                <Button
                  onClick={() => onDownload(selectedDiploma)}
                  className="w-full py-3 rounded-xl shadow-lg hover:shadow-xl transition bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                >
                  <Download className="h-5 w-5 mr-2" />
                  {currentLocale === 'es' ? 'Descargar Diploma' : 'Download Diploma'}
                </Button>
              </div>

              {/* Columna derecha: Información */}
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center shadow">
                    <GraduationCap className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                  </div>

                  <div>
                    <h3 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-snug">
                      {selectedDiploma.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                      {selectedDiploma.institution}
                    </p>

                    <div className="flex items-center gap-2 mt-3">
                      <Badge className="px-3 py-1 text-sm">{selectedDiploma.type}</Badge>
                      <Badge className="px-3 py-1 text-sm">{selectedDiploma.year}</Badge>
                    </div>
                  </div>
                </div>

                {/* Descripción */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                  {selectedDiploma.description}
                </p>

                {/* Habilidades */}
                {hasSkills && (
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {currentLocale === 'es' ? 'Habilidades Adquiridas' : 'Skills Acquired'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedDiploma.skills?.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer */}
                <div className="pt-4 border-t border-gray-200 dark:border-neutral-800">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <FileText className="h-4 w-4 text-blue-500" />
                    {currentLocale === 'es'
                      ? 'Documento verificado y autenticado'
                      : 'Verified and authenticated document'}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
