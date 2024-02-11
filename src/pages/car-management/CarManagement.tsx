import { AddCarDrawer } from '@/components/car/AddCarDrawer'
import CarList from '@/components/car/CarList'
import useDisappear from '@/hooks/utils/useDisappear'
import { Typography, Button, Box } from '@mui/joy'

function CarManagement() {
  const {
    isOpen: isAddCarDrawerOpen,
    open: openAddCarDrawer,
    close: closeAddCarDrawer,
  } = useDisappear()

  return (
    <Box
      px={2}
      py={3}
    >
      <Typography
        fontSize={24}
        fontWeight={600}
        mb={3}
      >
        Car
      </Typography>
      <section>
        <Button
          onClick={openAddCarDrawer}
          color='primary'
          fullWidth
          sx={{ mb: 3 }}
          className='tw-h-14 !tw-text-base !tw-normal-case !tw-rounded-lg'
        >
          Add Car
        </Button>
        <CarList />
        <AddCarDrawer
          isOpen={isAddCarDrawerOpen}
          onClose={closeAddCarDrawer}
        />
      </section>
    </Box>
  )
}

export default CarManagement
