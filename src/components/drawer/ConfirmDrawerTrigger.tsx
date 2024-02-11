import useDisappear from '@/hooks/utils/useDisappear'
import { PropsWithChildren } from 'react'
import { BottomDrawer } from './BottomDrawer'
import { Typography, Button } from '@mui/joy'

interface ConfirmDrawerTrigger {
  trigger: (props: { onClick: () => void }) => PropsWithChildren['children']
  onConfirm: () => void
  slot?: {
    confirmQuestionText?: string
    confirmText?: string
  }
}

export const ConfirmDrawerTrigger = ({
  trigger,
  onConfirm,
  slot = { confirmText: 'Confirm', confirmQuestionText: 'Are you sure?' },
}: ConfirmDrawerTrigger) => {
  const { open, isOpen, close } = useDisappear()

  const handleConfirm = () => {
    close()
    onConfirm()
  }

  return (
    <>
      {trigger({ onClick: open })}
      <BottomDrawer
        isOpen={isOpen}
        onClose={close}
      >
        <Typography
          mb={1.5}
          className='tw-text-center !tw-text-gray-700'
        >
          {slot.confirmQuestionText}
        </Typography>
        <Button
          color='warning'
          className='tw-h-14 tw-w-full tw-bg-orange-500 tw-text-base tw-font-normal tw-normal-case'
          onClick={handleConfirm}
        >
          {slot.confirmText}
        </Button>
      </BottomDrawer>
    </>
  )
}
