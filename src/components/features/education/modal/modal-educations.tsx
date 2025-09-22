'use client'

import { ModalProps } from './interfaces/modal-education.interfaces'
import { X, GraduationCap, Download, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

export function ModalEducation({
  isOpen,
  onClose,
  selectedDiploma,
  currentLocale,
  onDownload,
}: ModalProps) {
  if (!isOpen || !selectedDiploma) return null

  const hasSkills = selectedDiploma.skills && selectedDiploma.skills.length > 0

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-neutral-900 shadow-2xl">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 dark:bg-neutral-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-neutral-700 transition"
        >
          <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </button>

        {/* Contenido principal */}
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Columna izquierda: Imagen + descarga */}
          <div className="space-y-6">
            {/* Imagen */}
            <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-md">
              <Image
                src={selectedDiploma.image || '/placeholder.svg'}
                alt={selectedDiploma.title}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Botón de descarga */}
            <Button
              onClick={() => onDownload(selectedDiploma)}
              className="w-full py-3 rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
            >
              <Download className="h-5 w-5" />
              {currentLocale === 'es' ? 'Descargar Diploma' : 'Download Diploma'}
            </Button>
          </div>

          {/* Columna derecha: Información */}
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-gray-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedDiploma.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  {selectedDiploma.institution}
                </p>

                <div className="flex items-center gap-2 mt-2">
                  <Badge>{selectedDiploma.type}</Badge>
                  <Badge>{selectedDiploma.year}</Badge>
                </div>
              </div>
            </div>

            {/* Descripción */}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {selectedDiploma.description}
            </p>

            {/* Habilidades */}
            {hasSkills && (
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {currentLocale === 'es' ? 'Habilidades Adquiridas' : 'Skills Acquired'}
                </h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedDiploma.skills?.map((skill, idx) => (
                    <Badge
                      key={idx}
                      className="bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-gray-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="pt-4 border-t border-gray-200 dark:border-neutral-700">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <FileText className="h-4 w-4" />
                {currentLocale === 'es'
                  ? 'Documento verificado y autenticado'
                  : 'Verified and authenticated document'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
