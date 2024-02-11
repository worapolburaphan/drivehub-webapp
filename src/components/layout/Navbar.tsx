import { Box } from '@mui/joy'

function Navbar() {
  return (
    <Box className='tw-sticky tw-top-0 tw-z-[999] tw-flex tw-h-[60px] tw-items-center tw-gap-2 tw-rounded-none tw-bg-white/80 tw-px-4 tw-py-0 tw-shadow-lg tw-shadow-black/10 tw-backdrop-blur-md'>
      <img
        src='/icons/app-logo.svg'
        className='h-6'
      />
    </Box>
  )
}

export default Navbar
