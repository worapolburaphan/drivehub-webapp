import { Typography } from '@mui/joy'

interface EmptyItemProps {
  emptyText?: string
}

export default function EmptyItem({ emptyText = 'No item avaiable' }: EmptyItemProps) {
  return (
    <div className='tw-flex tw-flex-col tw-justify-center tw-py-[60px]'>
      <img
        src='/icons/empty-icon.svg'
        alt='empty-item'
        className='tw-h-10'
      />
      <Typography className='tw-text-center tw-text-black/20'>{emptyText}</Typography>
    </div>
  )
}
