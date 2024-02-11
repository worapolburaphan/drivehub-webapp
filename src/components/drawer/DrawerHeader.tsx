import { IconButton, Typography } from '@mui/joy'
import { AiOutlineClose } from 'react-icons/ai'

export function DrawerHeader({ onClose, title }: { title: string; onClose: () => void }) {
  return (
    <div className='tw-mb-8 tw-flex tw-items-center tw-justify-between'>
      <Typography
        fontSize={24}
        fontWeight={600}
      >
        {title}
      </Typography>
      <IconButton onClick={onClose}>
        <AiOutlineClose size={24} />
      </IconButton>
    </div>
  )
}
