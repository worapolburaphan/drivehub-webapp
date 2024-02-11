import { useState } from 'react'

export default function useDisappear(init: boolean = false) {
  const [isOpen, setIsOpen] = useState<boolean>(init)

  return {
    isOpen,
    toggle: () => setIsOpen(prev => !prev),
    close: () => setIsOpen(false),
    open: () => setIsOpen(true),
  }
}
