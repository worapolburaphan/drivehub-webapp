import { Drawer, Sheet } from '@mui/joy'
import { PropsWithChildren } from 'react'

interface BottomDrawerProps extends PropsWithChildren {
  isOpen: boolean
  onClose: () => void
}
export const BottomDrawer = ({ isOpen, onClose, children }: BottomDrawerProps) => {
  return (
    <Drawer
      anchor='bottom'
      open={isOpen}
      onClose={onClose}
      slotProps={{
        content: {
          className: '!tw-h-auto tw-p-4 !tw-shadow-none !tw-bg-transparent',
        },
      }}
    >
      <Sheet
        key={isOpen ? 'open' : 'close'}
        slotProps={{ root: { className: 'tw-p-4 tw-rounded-2xl' } }}
      >
        {children}
      </Sheet>
    </Drawer>
  )
}
