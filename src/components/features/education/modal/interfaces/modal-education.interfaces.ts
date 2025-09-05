import { Diploma } from "../../interfaces/education-interfaces"

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  selectedDiploma: Diploma | null
  currentLocale: 'es' | 'en'
  onDownload: (diploma: Diploma) => void
}
