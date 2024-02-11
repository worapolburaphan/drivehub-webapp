import { Typography } from '@mui/joy'

export const Footer = () => {
  return (
    <div className='tw-bg-gray-900 tw-px-4 tw-py-8 tw-text-white'>
      <Typography
        mb={0.5}
        className='tw-text-base !tw-text-white'
      >
        Drivehub Co.,Ltd
      </Typography>
      <Typography
        mb={3}
        className='tw-inline-block tw-text-xs !tw-text-white'
      >
        <span className='tw-inline-block'>193-195 Lake Rajada Office Complex, </span>
        <span className='tw-inline-block'>Ratchadapisek road, Khlong Toei, Bangkok</span>
      </Typography>
      <Typography className='tw-text-xs !tw-text-gray-200'>© Drivehub 2024</Typography>
    </div>
  )
}
