export const scrollToSection = (
  target: string | HTMLElement,
  options: ScrollIntoViewOptions = { behavior: 'smooth', block: 'start' },
  callback?: () => void,
): void => {
  if (typeof window === 'undefined' || !target) return

  console.log('Scrolling to:', target)
  console.log('Options:', options)

  const element = typeof target === 'string' ? document.getElementById(target) : target

  if (!element) return

  element.scrollIntoView(options)

  if (callback) {
    const delay = options.behavior === 'smooth' ? 300 : 0
    setTimeout(callback, delay)
  }
}
