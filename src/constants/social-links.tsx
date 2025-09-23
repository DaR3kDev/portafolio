import { SocialLink } from '@/components/shared/buttons/social-button'
import { WhatsAppIcon } from '@/components/shared/icons/brand-whatsapp'
import { Github, Linkedin, Mail } from 'lucide-react'

export const socialLinks: SocialLink[] = [
  {
    icon: <Mail className="w-full h-full" />,
    href: 'mailto:kevinvilleperez@gmail.com',
    label: 'Email',
  },
  {
    icon: <Linkedin className="w-full h-full" />,
    href: 'https://www.linkedin.com/in/kevin-villegas-666bb61ab/',
    label: 'LinkedIn',
  },
  {
    icon: <Github className="w-full h-full" />,
    href: 'https://github.com/DaR3kDev',
    label: 'GitHub',
  },
  {
    icon: <WhatsAppIcon className="w-full h-full" />,
    href: 'https://wa.me/573173552802',
    label: 'WhatsApp',
  },
]
